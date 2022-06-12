import {remove, render, RenderPosition} from '../framework/render.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import TripListView from '../view/trip-list-view.js';

import {filter} from '../utils/filter.js';
import SortView from '../view/sort-view.js';
import PointPresenter from './point-presenter.js';
import PointNewPresenter from './point-new-presenter.js';
import EmptyListView from '../view/empty-list-view.js';
import LoadingView from '../view/loading-view.js';
import InfoView from '../view/info-view.js';
//import {updateItem} from '../utils/common.js';
import {FilterType, SortType, UpdateType, UserAction} from '../const.js';
import {sortByDate, sortByDay, sortByPrice} from '../utils/sort.js';
import dayjs from 'dayjs';
//import NewPointView from '../view/new-point-view.js';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #filterModel = null;

  #tripComponent = new TripListView();
  #loadingComponent = new LoadingView();
  #emptyListComponent = null;
  #sortComponent = null;
  #tripInfoComponent = null;

  #pointPresenter = new Map();
  #pointNewPresenter = null;
  #currentSortType = SortType.DEFAULT;
  #filterType = FilterType.EVERYTHING;
  #isLoading = true;

  #uiBlocker = new UiBlocker(TimeLimit.LOWER_LIMIT, TimeLimit.UPPER_LIMIT);


  constructor(tripContainer, pointsModel, destinationsModel, offersModel, filterModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
    this.#destinationsModel = pointsModel;

    this.#offersModel = pointsModel;
    this.#filterModel = filterModel;

    this.#pointNewPresenter = new PointNewPresenter(this.#tripComponent.element, this.#handleViewAction, this.#pointsModel, this.#pointsModel);

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#filterType = this.#filterModel.filter;

    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#filterType](points);

    switch (this.#currentSortType) {
      case SortType.PRICE_DOWN:

        return filteredPoints.sort(sortByPrice);
      case SortType.TIME_DOWN:
        return filteredPoints.sort(sortByDate);
    }

    return filteredPoints.sort(sortByDay);
  }

  init() {
    this.#renderTrip();
  }

  createPoint = (callback) => {
    this.#currentSortType = SortType.DEFAULT;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#pointNewPresenter.init(callback);
  };

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenter.get(update.id).setSaving();
        try {
          await this.#pointsModel.updatePoint(updateType, update);
        } catch(err) {

          this.#pointPresenter.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#pointNewPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch(err) {
          this.#pointNewPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenter.get(update.id).setDeleting();
        try {

          await this.#pointsModel.deletePoint(updateType, update);
        } catch(err) {

          this.#pointPresenter.get(update.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearTrip();
        this.#renderTrip();
        break;
      case UpdateType.MAJOR:
        this.#clearTrip({resetSortType: true});
        this.#renderTrip();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderTrip();
        break;
    }
  };


  /**
   * Метод, который заменяет все редактируемые точки на стандартный вид
   */
  #handleModeChange = () => {
    this.#pointNewPresenter.destroy();
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  /**
   * Метод, изменяющий точку маршрута и обновляющий ее в списке точек маршрута
   * @param updatedPoint
   */
  // #handlePointChange = (updatedPoint) => {
  //   // this.#tripPoints = updateItem(this.#tripPoints, updatedPoint);
  //   // this.#sourcedTripPoints = updateItem(this.#sourcedTripPoints, updatedPoint);
  //   this.#pointPresenter.get(updatedPoint.id).init(updatedPoint);
  //
  //   // this.#sortPoints(this.#currentSortType);
  //   // this.#clearTaskList();
  //   // this.#renderPointsList();
  //   // this.#renderPoints();
  // };

  // #sortPoints = (sortType) => {
  //
  //   switch (sortType) {
  //     case SortType.PRICE_DOWN:
  //       this.#tripPoints.sort(sortByPrice);
  //       break;
  //     case SortType.TIME_DOWN:
  //       this.#tripPoints.sort(sortByDate);
  //
  //       break;
  //     default:
  //       // 3. А когда пользователь захочет "вернуть всё, как было",
  //       // мы просто запишем в _boardTasks исходный массив
  //       this.#tripPoints = [...this.#sourcedTripPoints];
  //   }
  //
  //   this.#currentSortType = sortType;
  // };

  /**
   * Колбэк клика по выбору метода сортировки
   * - Сортирует массив с точками
   * - Затем очищает список точек на экране
   * - И затем отрендеривает отсортированный список
   * @param sortType
   */
  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    //this.#sortPoints(sortType);
    this.#currentSortType = sortType;

    this.#clearTrip();
    this.#renderTrip();
    // this.#clearTaskList();
    // this.#renderPointsList();
    // this.#renderPoints();
  };

  /**
   * Рендерит кнопки сортировки, и вешает на них обработчик клика, который перерисовывает список точек в соответствии с выбранной сортировкой
   */
  #renderSort = () => {
    this.#sortComponent = new SortView(this.#currentSortType);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);

    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  };


  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(
      this.#tripComponent.element,
      this.#handleViewAction,
      this.#handleModeChange,
      this.#pointsModel.destinations,
      this.#pointsModel.offers);
    pointPresenter.init(point);
    this.#pointPresenter.set(point.id, pointPresenter);
  };


  #renderPointsList = () => {
    render(this.#tripComponent, this.#tripContainer);
  };

  #clearTaskList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  };

  #clearTrip = ({resetSortType = false} = {}) => {
    this.#pointNewPresenter.destroy();
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();

    remove(this.#sortComponent);
    remove(this.#loadingComponent);
    remove(this.#tripInfoComponent);

    if (this.#emptyListComponent) {
      remove(this.#emptyListComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  };

  #renderLoading = () => {
    render(this.#loadingComponent, this.#tripContainer);
  };

  #renderNoPoints = () => {
    this.#emptyListComponent = new EmptyListView(this.#filterType);
    render(this.#emptyListComponent, this.#tripContainer);

  };

  // #renderPoints = () => {
  //   for (let i = 0; i < this.#tripPoints.length; i++) {
  //     this.#renderPoint(this.#tripPoints[i]);
  //   }
  // };

  #renderPoints = (points) => {

    points.forEach((point) => this.#renderPoint(point));
  };

  #renderTrip = () => {
    render(this.#tripComponent, this.#tripContainer);

    if (this.#isLoading)  {
      this.#renderLoading();
      return;
    }

    const points = this.points;


    if (this.points.length === 0) {
      this.#renderNoPoints();
      return;
    }


    this.#renderSort();
    this.#renderPoints(points);
    if (this.points.length > 0) {
      this.#renderTripInfo();
    }
  };

  #getTripInfo = () => {
    const tripInfo = {
      cities: '',
    };
    const points = this.#pointsModel.points;
    const offersList = this.#pointsModel.offers;

    const firstPoint = points.sort(sortByDay)[0];
    const lastPoint = points.sort(sortByDay)[points.length - 1];

    // Города
    const destinationNames = [...new Set(points.map((item) => item.destination.name))];

    const destinationsNumber = destinationNames.length;

    if (destinationsNumber > 3) {
      tripInfo.cities = `${firstPoint.destination.name} - ... - ${lastPoint.destination.name}`;
    } else {
      for (let i = destinationsNumber; i > 0; i--) {
        tripInfo.cities = `${tripInfo.cities} ${destinationNames[i - 1]} -`;
      }
      tripInfo.cities = tripInfo.cities.slice(0, -2);
    }

    // Даты
    tripInfo.dates = `${dayjs(firstPoint.dateFrom).format('MMM D')} - ${dayjs(lastPoint.dateTo).format('MMM D')}`;


    const getOffersByType = (offersCatalog, type) => offersCatalog.find((offer) => offer.type.toLowerCase() === type.toLowerCase());

    const getOffersCost = (offersCatalog, selectedOffers, type) => {
      const availableOffers = getOffersByType(offersCatalog, type)?.offers || [];
      const eventOfersCost = availableOffers.reduce((acc, cur) => {
        if (selectedOffers.includes(cur.id)) {
          acc += cur.price;}
        return acc;
      }, 0);

      return eventOfersCost;
    };

    const getTripCost = () => points.reduce(
      (acc, { offers, type, basePrice }) => {
        const offersCost = getOffersCost(offersList, offers, type);
        acc += offersCost + basePrice;
        return acc;
      },
      0);


    tripInfo.totalPrice = getTripCost();

    return tripInfo;
  };

  #renderTripInfo = () => {
    const tripMainContainer = document.querySelector('.trip-main');
    this.#tripInfoComponent = new InfoView(this.#getTripInfo());

    render( this.#tripInfoComponent, tripMainContainer, RenderPosition.AFTERBEGIN);
  };
}
