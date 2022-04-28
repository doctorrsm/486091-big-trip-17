import InfoView from './view/info-view.js';
import {render} from './render.js';
import FilterView from './view/filter-view.js';
import EventsPresenter from './presenter/events-presenter.js';


const tripMainElement = document.querySelector('.trip-main');
const filterControlsHeaderElement = document.querySelector('.trip-controls__filters h2');
const tripEventsContainerElement = document.querySelector('.trip-events');

const eventsPresenter = new EventsPresenter();

render(new FilterView(), filterControlsHeaderElement, 'afterend');
render(new InfoView(), tripMainElement, 'afterbegin');

eventsPresenter.init(tripEventsContainerElement);
