import PointsListView from '../view/points-list-view';
import {render} from '../render.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
//import NewPointView from '../view/new-point-view.js';

export default class PointsPresenter {
  #pointsContainer = null;
  #pointsModel = null;
  #tripPoints = null;

  #pointsListComponent = new PointsListView();
  #pointComponent = new PointView();

  init(pointsContainer, pointsModel) {
    this.#pointsContainer = pointsContainer;
    this.#pointsModel = pointsModel;
    this.#tripPoints = [...this.#pointsModel.points];


    render(this.#pointsListComponent, this.#pointsContainer);
    ///render(new NewPointView(), this.#eventsListComponent.element);

    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i]);
    }

    ///render(new EventEditView(this.tripEvents[0]), this.eventsListComponent.getElement());
  }

  #renderPoint = (point) => {
    const pointComponent =  new PointView(point);
    const pointEditComponent = new PointEditView(point);

    const replacePointToForm = () => {
      this.#pointsListComponent.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#pointsListComponent.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(pointComponent, this.#pointsListComponent.element);
  };
}
