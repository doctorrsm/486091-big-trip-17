import {generatePoint} from '../mock/point';

export default class EventsModel {
  events = Array.from({length: 13}, generatePoint);

  getEvents = () => this.events;
}
