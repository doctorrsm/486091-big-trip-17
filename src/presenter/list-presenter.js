import PointsListView from '../view/points-list-view';
import {render, RenderPosition} from '../framework/render.js';
import SortView from '../view/sort-view';
import PointPresenter from './point-presenter.js';
import EmptyListView from '../view/empty-list-view.js';
import {updateItem} from '../utils/common.js';
import {SortType} from '../const.js';
import {sortByDate} from '../utils/sort.js';
//import NewPointView from '../view/new-point-view.js';

export default class ListPresenter {
  #pointsContainer = null;
  #pointsModel = null;
  #tripPoints = null;

  #pointsListComponent = new PointsListView();
  #emptyListComponent = new EmptyListView();
  #sortComponent = new SortView();
  #pointPresenter = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedListPoints = [];

  constructor(pointsContainer, pointsModel) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#tripPoints = [...this.#pointsModel.points];
    this.#sourcedListPoints = [...this.#pointsModel.points];

    if (this.#tripPoints.length === 0) {
      return render(this.#emptyListComponent, this.#pointsContainer);
    }

    this.#renderPointsList();
    this.#renderSort();
    this.#renderTripPoints();
  }

  #renderPointsList = () => {
    render(this.#pointsListComponent, this.#pointsContainer);
  };

  #renderSort = () => {
    render(this.#sortComponent, this.#pointsContainer, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #clearTaskList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  };

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #sortPoints = (sortType) => {

    switch (sortType) {
      case SortType.PRICE_DOWN:
        this.#tripPoints.sort(sortByDate);
        break;
      case SortType.TIME_DOWN:
        this.#tripPoints.sort(sortByDate);
        console.log('sortby', this.#tripPoints);
        break;
      default:
        // 3. А когда пользователь захочет "вернуть всё, как было",
        // мы просто запишем в _boardTasks исходный массив
        this.#tripPoints = [...this.#sourcedListPoints];
    }

    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearTaskList();
    this.#renderTripPoints();
  };

  #handlePointChange = (updatedPoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
    this.sourcedListTasks = updateItem(this.sourcedListTasks, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #renderTripPoints = () => {
    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);
    }
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointsListComponent.element, this.#handlePointChange, this.#handleModeChange);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };
}
