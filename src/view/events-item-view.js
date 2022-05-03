import {createElement} from '../render.js';

const createEventsItemTemplate = () => (
  '<ul class="trip-events__list"></ul>');


export default class EventsItemView {
  #element = null;

  get template() {
    return createEventsItemTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
