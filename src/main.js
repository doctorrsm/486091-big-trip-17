import InfoView from './view/info-view.js';
import {render} from './render.js';
import FilterView from './view/filter-view.js';
import PointsPresenter from './presenter/points-presenter.js';
import PointsModel from './model/points-model';

const tripMainElement = document.querySelector('.trip-main');
const filterControlsHeaderElement = document.querySelector('.trip-controls__filters h2');
const tripEventsContainerElement = document.querySelector('.trip-events');

const eventsModel = new PointsModel();

const pointsPresenter = new PointsPresenter();

render(new FilterView(), filterControlsHeaderElement, 'afterend');
render(new InfoView(), tripMainElement, 'afterbegin');

pointsPresenter.init(tripEventsContainerElement, eventsModel);
