import EventsListView from '../view/events-list-view';
import {render} from '../render.js';
import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';
import NewPointView from '../view/new-point-view.js';

export default class EventsPresenter {
  eventsListComponent = new EventsListView();
  tripEventComponent = new EventView();

  init(eventsContainer, eventsModel) {
    this.eventsContainer = eventsContainer;
    this.eventsModel = eventsModel;
    this.tripEvents = [...this.eventsModel.getEvents()];
    console.log(this.tripEvents);
    render(this.eventsListComponent, this.eventsContainer);
    render(new NewPointView(), this.eventsListComponent.getElement());

    for (let i = 0; i < this.tripEvents.length; i++) {
      render(new EventView(this.tripEvents[i]), this.eventsListComponent.getElement());
    }

    render(new EventEditView(), this.eventsListComponent.getElement());
  }
}
