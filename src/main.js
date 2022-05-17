import {render} from './framework/render.js';
import InfoView from './view/info-view.js';
import FilterView from './view/filter-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';

// import {filterFuture, filterPast} from './utils/filter.js';

const tripMainElement = document.querySelector('.trip-main');
const filterControlsHeaderElement = document.querySelector('.trip-controls__filters h2');
const tripEventsContainerElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter(tripEventsContainerElement, pointsModel);

render(new FilterView(), filterControlsHeaderElement, 'afterend');
render(new InfoView(), tripMainElement, 'afterbegin');

tripPresenter.init();

// filterFuture(pointsModel.points);
// filterPast(pointsModel.points);


