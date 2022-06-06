import dayjs from 'dayjs';

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past',
};

const SortType = {
  DEFAULT: 'default',
  TIME_DOWN: 'time-down',
  PRICE_DOWN: 'price-down',
};

const UserAction = {
  UPDATE_TASK: 'UPDATE_TASK',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const BLANK_POINT = {
  id: '',
  type: 'bus',
  dateFrom: dayjs().toString(),
  dateTo: dayjs().toString(),
  destination: {
    name: '',
    description: '',
    pictures: []
  },
  basePrice: 0,
  isFavorite: false,
  offers: [],
};

export { FilterType, SortType, UserAction, UpdateType, BLANK_POINT };
