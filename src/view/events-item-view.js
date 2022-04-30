import {createElement} from '../render.js';

const createEventsItemTemplate = () => (
  '<ul class="trip-events__list"></ul>');


export default class EventsItemView {
  getTemplate() {
    return createEventsItemTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}