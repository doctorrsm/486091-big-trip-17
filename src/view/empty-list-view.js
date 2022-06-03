import AbstractView from '../framework/view/abstract-view.js';

const createEmptyListTemplate = () => (
  '<p class="trip-events__msg">Click New Event to create your first point</p>');

/**
 * Выводит сообщение с предложением добавить новую точку маршрута.
 */
export default class EmptyListView extends AbstractView{
  get template() {
    return createEmptyListTemplate();
  }
}
