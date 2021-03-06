import AbstractView from '../framework/view/abstract-view.js';
import {capitalizeFirstLetter, getTimeDifference, HumanizeEvent} from '../utils/point.js';


const humanizeEvent = new HumanizeEvent;

const createPointTemplate = (event, availableOffersx) => {
  const {type, dateTo, dateFrom, isFavorite, offers, basePrice, destination} = event;
  const checkedOffersIds = offers;

  const setFavoriteClass = () => isFavorite ? 'event__favorite-btn  event__favorite-btn--active' : 'event__favorite-btn';

  const renderOffers = (pointOffers) => pointOffers.map((offer) => (`
      <li class="event__offer">
         <span class="event__offer-title">${offer.title}</span>
         &plus;&euro;&nbsp;
         <span class="event__offer-price">${offer.price}</span>
      </li>
    `)).join(' ');

  const currentTypeOffers = availableOffersx.find((item) => item.type === type).offers;

  const checkedOffers = currentTypeOffers.filter(((offer) => checkedOffersIds.indexOf(offer.id) !== -1
  ));
  const renderOffersList = () => {

    if (offers) {
      return `
        <ul class="event__selected-offers">
            ${renderOffers(checkedOffers)}
        </ul>
            `;
    } else {
      return '';
    }

  };
  return (`
            <li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${humanizeEvent.getDatetimeForDay(dateFrom)}">${humanizeEvent.getDay(dateFrom)}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${capitalizeFirstLetter(type)} ${destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${humanizeEvent.getDatetimeForTime(dateFrom)}">${humanizeEvent.getTime(dateFrom)}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${humanizeEvent.getDatetimeForTime(dateTo)}">${humanizeEvent.getTime(dateTo)}</time>
                  </p>
                  <p class="event__duration">${getTimeDifference(dateFrom, dateTo)}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
               ${renderOffersList()}
                <button class="${setFavoriteClass()}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>
        `);
};

export default class PointView  extends AbstractView {
  #point = null;
  #offersModel = null;

  constructor(point, offersModel) {
    super();
    this.#point = point;
    this.#offersModel = offersModel;
  }

  get template() {
    return createPointTemplate(this.#point, this.#offersModel);
  }

  setOnRollupBtnClickHandler = (callback) => {
    this._callback.onRollupBtnClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onRollupBtnClickHandler);
  };

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  };

  #onRollupBtnClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.onRollupBtnClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  };
}
