import {render, replace, remove} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointsContainer = null;
  #changeData = null;
  #changeMode = null;

  #pointComponent =  null;
  #pointEditComponent = null;

  #point = null;
  #mode = Mode.DEFAULT;

  constructor(pointsContainer, changeData, changeMode) {
    this.#pointsContainer = pointsContainer;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent =  new PointView(point);
    this.#pointEditComponent = new PointEditView(point);

    this.#pointComponent.setOnRollupBtnClickHandler(this.#handleOnRollupBtnClick);
    this.#pointComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#pointEditComponent.setFormSubmitHandler(this.#handleFormSubmit);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointsContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  };


  destroy = () => {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  };

  #replacePointToForm = () => {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#onEscKeyDownHandler);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#onEscKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  };

  #onEscKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleOnRollupBtnClick = () => {
    this.#replacePointToForm();
  };

  #handleFavoriteClick = () => {
    // console.log(this.#point);
    this.#changeData({...this.#point, isFavorite: !this.#point.isFavorite});
    // console.log(this.#changeData);
    // this.#changeData(this.#point);

  };

  #handleFormSubmit = (task) => {
   // this.#changeData(task);
    this.#replaceFormToPoint();
  };
}
