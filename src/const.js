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

export { FilterType, SortType, UserAction, UpdateType };
