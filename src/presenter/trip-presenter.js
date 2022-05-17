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

  #tripComponent = new TripListView();
  #emptyListComponent = new EmptyListView();
  #sortComponent = new SortView();

  #tripPoints = null;
  #pointPresenter = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedTripPoints = [];

  constructor(tripContainer, pointsModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];
    this.#sourcedTripPoints = [...this.#pointsModel.points];

    this.#renderTrip();
  }

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
    this.#sourcedTripPoints = updateItem(this.#sourcedTripPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);

  };

  #sortPoints = (sortType) => {

    switch (sortType) {
      case SortType.PRICE_DOWN:
        this.#tripPoints.sort(sortByPrice);
        break;
      case SortType.TIME_DOWN:
        this.#tripPoints.sort(sortByDate);
        console.log('sortby', this.#tripPoints);
        break;
      default:
        // 3. А когда пользователь захочет "вернуть всё, как было",
        // мы просто запишем в _boardTasks исходный массив
        this.#tripPoints = [...this.#sourcedTripPoints];
    }

    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearTaskList();
    this.#renderPointsList();
    this.#renderPointList();
  };

  #renderSort = () => {
    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#tripComponent.element, this.#handlePointChange, this.#handleModeChange);
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







  #renderPointList = () => {
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
    this.#renderPointList();
  };
}
