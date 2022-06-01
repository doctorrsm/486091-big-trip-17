import TripListView from '../view/trip-list-view.js';
import {render, RenderPosition} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';
import EmptyListView from '../view/empty-list-view.js';
import {updateItem} from '../utils/common.js';
import {SortType} from '../const.js';
import {sortByDate, sortByPrice} from '../utils/sort.js';
//import NewPointView from '../view/new-point-view.js';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  get points() {
    return this.#pointsModel.points;
  }

  /**
   * Тег обертка, для точек маршрута
   * @type {TripListView} -Объект содержащий элемент `<ul class="trip-events__list"></ul>`
   */
  #tripComponent = new TripListView();
  #emptyListComponent = new EmptyListView();
  #sortComponent = new SortView();

  #tripPoints = null;
  /**
   * Мапа, сподержащая все презентеры точек маршрута
   * @type {*}
   */
  #pointPresenter = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedTripPoints = [];

  constructor(tripContainer, pointsModel, destinationsModel, offersModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];
    this.#sourcedTripPoints = [...this.#pointsModel.points];

    this.#renderTrip();
  }



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
  #handlePointChange = (updatedPoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
    this.#sourcedTripPoints = updateItem(this.#sourcedTripPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);

    this.#sortPoints(this.#currentSortType);
    this.#clearTaskList();
    this.#renderPointsList();
    this.#renderPoints();
  };

  #sortPoints = (sortType) => {

    switch (sortType) {
      case SortType.PRICE_DOWN:
        this.#tripPoints.sort(sortByPrice);
        break;
      case SortType.TIME_DOWN:
        this.#tripPoints.sort(sortByDate);

        break;
      default:
        // 3. А когда пользователь захочет "вернуть всё, как было",
        // мы просто запишем в _boardTasks исходный массив
        this.#tripPoints = [...this.#sourcedTripPoints];
    }

    this.#currentSortType = sortType;
  };

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

    this.#sortPoints(sortType);
    this.#clearTaskList();
    this.#renderPointsList();
    this.#renderPoints();
  };

  /**
   * Рендерит кнопки сортировки, и вешает на них обработчик клика, который перерисовывает список точек в соответствии с выбранной сортировкой
   */
  #renderSort = () => {
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  /**
   * Создает презентер точки маршрута. Инитит его и помещает в мапу (id => presenter), содержащую все презентеры
   * @param point
   */
  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(
      this.#tripComponent.element,
      this.#handlePointChange,
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

  #renderNoPoints = () => {
    render(this.#emptyListComponent, this.#tripContainer);
  };

  #renderPoints = () => {
    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);
    }
  };

  #renderTrip = () => {
    render(this.#tripComponent, this.#tripContainer);

    if (this.#tripPoints.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderSort();
    this.#renderPoints();
  };
}
