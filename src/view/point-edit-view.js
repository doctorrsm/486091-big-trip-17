import he from 'he';
import { capitalizeFirstLetter, HumanizeEvent } from '../utils/point.js';
import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';
import dayjs from 'dayjs';
import {BLANK_POINT} from '../const.js';


const humanizeEvent = new HumanizeEvent;

const createPointEditTemplate = (event, destinations, allOffers, isNewPoint) => {
  const { id, type, dateTo, dateFrom, offers, basePrice, destination, isDisabled,
    isSaving,
    isDeleting, } = event;


  const date1From = dayjs(dateFrom);
  const date1To = dayjs(dateTo);
  const date1Diff = date1To.diff(date1From);
  const isSubmitDisabled = date1Diff <= 0 || basePrice < 1;


  const renderCitiesList = () => {
    const cities = destinations.map((item) => item.name);
    return cities.map((cityName) => (`
        <option value="${cityName}"></option>
    `)).join('');
  };

  const renderRollUpButton = () => (`
     <button class="event__rollup-btn" type="button">
       <span class="visually-hidden">Open event</span>
     </button>
  `);


  // const checkedOffers = offers.map((offer) => offer.id);


  const currentOffers = allOffers.find((item) => item.type === type).offers;

  // const allDestinations = destinations;

  const createOfferAttributeName = (offerTitle) => offerTitle.trim().toLowerCase().split(' ').join('-');

  const setCheckedAtrribute = (index) => {
    const NUMBERING_DIFFERENCE = 1;

    return offers.some((checkedId) => checkedId === index + NUMBERING_DIFFERENCE) ? 'checked' : '';

  };

  const renderAddOffersList = (arrayWithOffers) => arrayWithOffers.map((offer, index) => (`
      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${createOfferAttributeName(offer.title)}-${id}" type="checkbox" name="event-offer-${createOfferAttributeName(offer.title)}" ${setCheckedAtrribute(index)} data-offer-id="${offer.id}">
                        <label class="event__offer-label" for="event-offer-${createOfferAttributeName(offer.title)}-${id}">
                          <span class="event__offer-title">${offer.title}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${offer.price}</span>
                        </label>
                      </div>
    `)).join(' ');

  const renderOffersSection = () => `
    <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                            ${renderAddOffersList(currentOffers)}

                    </div>
                  </section>
  `;

  const renderImage = (arrayWithImages) => arrayWithImages.map((img) => (`
      <img class="event__photo" src="${img.src}" alt="${img.description}">
  `));

  const renderDestinationImages = () => (`
             <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${renderImage(destination.pictures)}
                      </div>
             </div>`);

  const renderDestination = () => `
    <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${he.encode(destination.description)}</p>
                    ${ destination.pictures? renderDestinationImages() : ''}
    </section>
  `;

  return `<li class="trip-events__item"><form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${type === 'taxi' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${type === 'bus' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${type === 'train' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${type === 'ship' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${type === 'drive' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${type === 'flight' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${type === 'check-in' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${type === 'sightseeing' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${type === 'restaurant' ? 'checked' : ''}>
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-${id}">
                      ${capitalizeFirstLetter(type)}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${destination.name}" list="destination-list-${id}">
                    <datalist id="destination-list-${id}">
                        ${renderCitiesList()}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeEvent.getTimeForInputValue(dateFrom)}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeEvent.getTimeForInputValue(dateTo)}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="" pattern="[0-9]+"  name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" ${isSubmitDisabled || isDisabled ? 'disabled' : ''} type="submit">${isSaving ? 'saving...' : 'save'}</button>
                  <button class="event__reset-btn" type="reset"  ${isDisabled ? 'disabled' : ''}>${isNewPoint ? 'Cancel' : 'Delete'} ${isDeleting ? 'deleting...' : 'delete'}</button>

                  ${ isNewPoint ? '' : renderRollUpButton() }


                </header>
                <section class="event__details">
                   ${currentOffers.length > 0 ? renderOffersSection() : ''}

                  ${ destination.description ? renderDestination() : ''}
                </section>
              </form></li>`;
};

export default class PointEditView extends AbstractStatefulView {
  #point = null;
  #dateFromDatepicker = null;
  #dateToDatepicker = null;
  #isNewPoint = null;

  #destinations = null;
  #offersModel = null;

  constructor(point = BLANK_POINT, destinations, offersModel, isNewPoint = false) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offersModel = offersModel;

    this.#isNewPoint = isNewPoint;


    this._state = PointEditView.parsePointToState(point);
    this.#setInnerHandlers();
    this.#setDatepicker();
  }

  get template() {
    return createPointEditTemplate(this._state, this.#destinations, this.#offersModel, this.#isNewPoint);
  }

  reset = (point) => {
    this.updateElement(
      PointEditView.parsePointToState(point)
    );
  };

  removeElement = () => {
    super.removeElement();

    if (this.#dateFromDatepicker) {
      this.#dateFromDatepicker.destroy();
      this.#dateFromDatepicker = null;
    }

    if (this.#dateToDatepicker) {
      this.#dateToDatepicker.destroy();
      this.#dateToDatepicker = null;
    }
  };

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);

  };

  #setDatepicker = () => {

    if (this._state.dateFrom) {
      // flatpickr есть смысл инициализировать только в случае,
      // если поле выбора даты доступно для заполнения
      this.#dateFromDatepicker = flatpickr(
        this.element.querySelector('#event-start-time-1'),
        {
          enableTime: true,
          dateFormat: 'd/m/y H:i',
          defaultDate: this._state.dateFrom,
          onChange: this.#dateFromChangeHanlder, // На событие flatpickr передаём наш колбэк
        },
      );
    }

    if(this._state.dateTo) {
      this.#dateToDatepicker = flatpickr(
        this.element.querySelector('#event-end-time-1'),
        {
          enableTime: true,
          dateFormat: 'd/m/y H:i',
          defaultDate: this._state.dateTo,
          onChange: this.#dateToChangeHanlder, // На событие flatpickr передаём наш колбэк
        }
      );
    }
  };


  _restoreHandlers = () => {
    this.#setInnerHandlers();
    this.#setDatepicker();
    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setOnRollupBtnClickHandler(this._callback.onRollupBtnClick);
    this.setDeleteClickHandler(this._callback.deleteClick);
  };

  setOnRollupBtnClickHandler = (callback) => {
    if (this.#isNewPoint) {
      return;
    }
    this._callback.onRollupBtnClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onRollupBtnClickHandler);
  };

  setDeleteClickHandler = (callback) => {
    this._callback.deleteClick = callback;
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#formDeleteClickHandler);
  };

  #dateFromChangeHanlder = ([userDate]) => {
    console.log('dateFromchangehandler userDate', userDate);
    this.updateElement({
      dateFrom: userDate.toISOString(),
    });
    console.log('dateFromchangehandler this._state', this._state)
  };

  #dateToChangeHanlder = ([userDate]) => {
    this.updateElement({
      dateTo: userDate.toISOString(),
    });
  };

  #destinationChangeHandler = (evt) => {

    const getDestination = () => {
      for (const destination of this.#destinations) {


        if (destination.name === evt.target.value) {

          this.updateElement({
            destination: destination,
          });
          break;
        }
      }

      if (evt.target.value !== this._state.destination.name) {
        evt.target.value = '';
      }
    };

    getDestination();

  };

  #typeChangeHandler = (evt) => {

    this.updateElement({
      type: evt.target.value,
      offers: [],
    });
  };

  #priceChangeHandler = (evt) => {

    this.updateElement({
      basePrice: Number(evt.target.value),

    });


  };

  #priceInputHandler = (evt) => {
    evt.target.value = evt.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#changeOffers();
    console.log('formSubmitHandler this._state)', this._state);
    this._callback.formSubmit(PointEditView.parseStateToPoint(this._state));

  };

  #formDeleteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.deleteClick(PointEditView.parseStateToPoint(this._state));
  };

  #onRollupBtnClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.onRollupBtnClick();
  };

  #setInnerHandlers = () => {
    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);

    this.element.querySelector('.event__type-list')
      .addEventListener('change', this.#typeChangeHandler);

    this.element.querySelector('.event__input--price')
      .addEventListener('input', this.#priceInputHandler);

    this.element.querySelector('.event__input--price')
      .addEventListener('change', this.#priceChangeHandler);


  };

  #changeOffers = () => {
    const offers = this.element.querySelectorAll(('.event__offer-checkbox'));
    const checkedOffers = [];
    Array.from(offers).map((item) => {
      if (item.checked === true) {
        checkedOffers.push(Number(item.dataset.offerId));
      }
    });

    this.updateElement({
      'offers': checkedOffers,
    });
  };

  static parsePointToState = (point) => ({ ...point,
    // TODO вернуть обратно и отделать isOffers: point.offers.length > 0 ,
    isOffers: point.offers !== null ,
    isDestination: point.destination !== null,

    isDisabled: false,
    isSaving: false,
    isDeleting: false,

  });


  static parseStateToPoint = (state) => {
    const point = { ...state };

    // if (!point.isOffers) {
    //   point.offers = null;
    // }

    delete point.isOffers;
    delete point.isDestination;

    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;

    return point;
  };
}
