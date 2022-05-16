import InfoView from './view/info-view.js';
import {render} from './framework/render.js';
import FilterView from './view/filter-view.js';
import ListPresenter from './presenter/list-presenter.js';
import PointsModel from './model/points-model';

import {filterFuture, filterPast} from './utils/filter.js';
import {sortByDate, sortByPrice} from './utils/sort.js';

const tripMainElement = document.querySelector('.trip-main');
const filterControlsHeaderElement = document.querySelector('.trip-controls__filters h2');
const tripEventsContainerElement = document.querySelector('.trip-events');

const eventsModel = new PointsModel();

const listPresenter = new ListPresenter(tripEventsContainerElement, eventsModel);

render(new FilterView(), filterControlsHeaderElement, 'afterend');
render(new InfoView(), tripMainElement, 'afterbegin');

listPresenter.init();

filterFuture(eventsModel.points);
filterPast(eventsModel.points);

// const sortedByDate = sortByDate(eventsModel.points);
// console.log('sortByDate',sortedByDate)
//
// const sortedByPrice = sortByPrice(eventsModel.points);
// console.log(sortedByPrice)
