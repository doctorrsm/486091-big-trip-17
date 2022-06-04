import TripListView from '../view/trip-list-view.js';
import {remove, render, RenderPosition} from '../framework/render.js';
import {filter} from '../utils/filter.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';
import EmptyListView from '../view/empty-list-view.js';
//import {updateItem} from '../utils/common.js';
import {FilterType, SortType, UpdateType, UserAction} from '../const.js';
import {sortByDate, sortByPrice} from '../utils/sort.js';
//import NewPointView from '../view/new-point-view.js';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #filterModel = null;

  #tripComponent = new TripListView();
  #emptyListComponent = null;
  #sortComponent = null;

  #pointPresenter = new Map();
  #currentSortType = SortType.DEFAULT;
  #filterType = FilterType.EVERYTHING;


  constructor(tripContainer, pointsModel, destinationsModel, offersModel, filterModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#filterModel = filterModel;
    console.log('filterModer  в конструкторе trip-presenter', filterModel);
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filterModel.filter;
    console.log('filterType', this.#filterType);
    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.PRICE_DOWN:

        return filteredPoints.sort(sortByPrice);
      case SortType.TIME_DOWN:
        return filteredPoints.sort(sortByDate);
    }

    return filteredPoints;
  }

  init() {
    this.#renderTrip();
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_TASK:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_TASK:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_TASK:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearTrip();
        this.#renderTrip();
        break;
      case UpdateType.MAJOR:
        this.#clearTrip({resetSortType: true});
        this.#renderTrip();
        break;
    }
  };


  /**
   * Метод, который заменяет все редактируемые точки на стандартный вид
   */
  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  /**
   * Метод, изменяющий точку маршрута и обновляющий ее в списке точек маршрута
   * @param updatedPoint
   */
  // #handlePointChange = (updatedPoint) => {
  //   // this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
  //   // this.#sourcedTripPoints = updateItem(this.#sourcedTripPoints, updatedPoint);
  //   this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  //
  //   // this.#sortPoints(this.#currentSortType);
  //   // this.#clearTaskList();
  //   // this.#renderPointsList();
  //   // this.#renderPoints();
  // };

  // #sortPoints = (sortType) => {
  //
  //   switch (sortType) {
  //     case SortType.PRICE_DOWN:
  //       this.#tripPoints.sort(sortByPrice);
  //       break;
  //     case SortType.TIME_DOWN:
  //       this.#tripPoints.sort(sortByDate);
  //
  //       break;
  //     default:
  //       // 3. А когда пользователь захочет "вернуть всё, как было",
  //       // мы просто запишем в _boardTasks исходный массив
  //       this.#tripPoints = [...this.#sourcedTripPoints];
  //   }
  //
  //   this.#currentSortType = sortType;
  // };

  /**
   * Колбэк клика по выбору метода сортировки
   * - Сортирует массив с точками
   * - Затем очищает список точек на экране
   * - И затем отрендеривает отсортированный список
   * @param sortType
   */
  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    //this.#sortPoints(sortType);
    this.#currentSortType = sortType;

    this.#clearTrip();
    this.#renderTrip();
    // this.#clearTaskList();
    // this.#renderPointsList();
    // this.#renderPoints();
  };

  /**
   * Рендерит кнопки сортировки, и вешает на них обработчик клика, который перерисовывает список точек в соответствии с выбранной сортировкой
   */
  #renderSort = () => {
    this.#sortComponent = new SortView(this.#currentSortType);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);

    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  };


  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(
      this.#tripComponent.element,
      this.#handleViewAction,
      this.#handleModeChange,
      this.#destinationsModel.destinations,
      this.#offersModel.offers);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };


  #renderPointsList = () => {
    render(this.#tripComponent, this.#tripContainer);
  };

  #clearTaskList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  };

  #clearTrip = ({resetSortType = false} = {}) => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();

    remove(this.#sortComponent);

    if (this.#emptyListComponent) {
      remove(this.#emptyListComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  };

  #renderNoPoints = () => {
    this.#emptyListComponent = new EmptyListView(this.#filterType);
    render(this.#emptyListComponent, this.#tripContainer);
  };

  // #renderPoints = () => {
  //   for (let i = 0; i < this.#tripPoints.length; i++) {
  //     this.#renderPoint(this.#tripPoints[i]);
  //   }
  // };

  #renderPoints = (points) => {

    points.forEach((point) => this.#renderPoint(point));
  };

  #renderTrip = () => {
    const points = this.points;
    render(this.#tripComponent, this.#tripContainer);

    if (this.points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPoints(points);
  };
}
