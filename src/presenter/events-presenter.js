import EventsListView from '../view/events-list-view';
import {render} from '../render.js';
import TripEventView from '../view/trip-event-view.js';
import EventEditView from '../view/event-edit-view.js';
import NewPointView from '../view/new-point-view.js';

export default class EventsPresenter {
  eventsListComponent = new EventsListView();
  tripEventComponent = new TripEventView();

  init(eventsContainer) {
    this.eventsContainer = eventsContainer;
    render(this.eventsListComponent, this.eventsContainer);
    render(new NewPointView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripEventView(), this.eventsListComponent.getElement());
    }

    render(new EventEditView(), this.eventsListComponent.getElement());
  }
}
