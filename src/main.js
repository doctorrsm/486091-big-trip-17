import {render} from './framework/render.js';
import InfoView from './view/info-view.js';
import FilterView from './view/filter-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from "./presenter/filter-presenter";

// const filters = [
//   {
//     type: 'everything',
//     name: 'Everything',
//   },
//   {
//     type: 'future',
//     name: 'Future',
//   },
//   {
//     type: 'past',
//     name: 'Past',
//   },
// ];

// import {filterFuture, filterPast} from './utils/filter.js';

const tripMainElement = document.querySelector('.trip-main');
const filterControlsHeaderElement = document.querySelector('.trip-controls__filters h2');
const tripEventsContainerElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const destinationsModel = new DestinationsModel();
const offersModel = new OffersModel();
const filterModel = new FilterModel();

const tripPresenter = new TripPresenter(tripEventsContainerElement, pointsModel, destinationsModel, offersModel, filterModel);
const filterPresenter = new FilterPresenter(filterControlsHeaderElement, filterModel, pointsModel);
console.log('filterPresenter main.js', filterPresenter)

filterPresenter.init();
tripPresenter.init();

//render(new FilterView(filters, 'everything'), filterControlsHeaderElement, 'afterend');
render(new InfoView(), tripMainElement, 'afterbegin');

// filterFuture(pointsModel.points);
// filterPast(pointsModel.points);


