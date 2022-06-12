import dayjs from 'dayjs';
import {FilterType} from '../const.js';

const currentDay = dayjs();

export const filterFuture = (point) => {
  const dateFrom = dayjs(point.dateFrom);
  const dateTo = dayjs(point.dateTo);

  if (dateFrom.isBefore(currentDay) && dateTo.isAfter(currentDay)) {
    return true;
  }
  return currentDay.isBefore(dateFrom);
};


export const filterPast = (point) => {
  const dateFrom = dayjs(point.dateFrom);
  const dateTo = dayjs(point.dateTo);
  if (dateFrom.isBefore(currentDay) && dateTo.isAfter(currentDay)) {
    return true;
  }
  return dateFrom.isBefore(currentDay);
};

export const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.PAST]: (points) => points.filter((point) => {
    const dateTo = dayjs(point.dateTo);

    if (currentDay.isAfter(dateTo)) {
      return point;
    }
  }),
  [FilterType.FUTURE]: (points) => points.filter((point) => {
    const dateFrom = dayjs(point.dateFrom);

    if (currentDay.isBefore(dateFrom)) {
      return point;
    }
  }),
};
