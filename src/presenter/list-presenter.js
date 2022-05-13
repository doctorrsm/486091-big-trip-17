import PointsListView from '../view/points-list-view';
import {render, replace} from '../framework/render.js';
import SortView from '../view/sort-view';
import PointPresenter from './point-presenter.js';
import EmptyListView from '../view/empty-list-view.js';
import {updateItem} from '../utils/common.js';
//import NewPointView from '../view/new-point-view.js';

export default class ListPresenter {
  #pointsContainer = null;
  #pointsModel = null;
  #tripPoints = null;

  #pointsListComponent = new PointsListView();
  #emptyListComponent = new EmptyListView();
  #sortComponent = new SortView();
  #pointPresenter = new Map();

  init(pointsContainer, pointsModel) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointsModel;
    this.#tripPoints = [...this.#pointsModel.points];

    if (this.#tripPoints.length === 0) {
      return render(this.#emptyListComponent, this.#pointsContainer);
    }

    this.#renderPointsList();

    this.#renderTripPoints();
  }

  #renderPointsList = () => {
    render(this.#sortComponent, this.#pointsContainer);
    render(this.#pointsListComponent, this.#pointsContainer);
  };

  #clearTaskList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  };

  #handlePointChange = (updatedPoint) => {
    this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  };





  #renderTripPoints = () => {
    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);
    }
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointsListComponent.element);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };
}
