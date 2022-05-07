import AbstractView from '../framework/view/abstract-view.js';

const createEventsItemTemplate = () => (
  '<ul class="trip-events__list"></ul>');


export default class EventsItemView   extends AbstractView{
  get template() {
    return createEventsItemTemplate();
  }
}
