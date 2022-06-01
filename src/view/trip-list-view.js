import AbstractView from '../framework/view/abstract-view.js';

const createEventsListTemplate = () => (
  '<ul class="trip-events__list"></ul>');

/**
 * Объект возвращающий `<ul class="trip-events__list"></ul>`
 * - Тег обертка, для точек маршрута
 */
export default class TripListView extends AbstractView {
  get template() {
    return createEventsListTemplate();
  }
}
