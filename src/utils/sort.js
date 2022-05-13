import dayjs from 'dayjs';

export const sortByDate = (points) => points.sort((point1, point2) => {
  const date1 = dayjs(point1.dateFrom);
  const date2 = dayjs(point2.dateFrom);
  return date1.isBefore(date2);
});

export const sortByPrice = (points) => points.sort((point1, point2) => {
  const price1 = dayjs(point1.basePrice);
  const price2 = dayjs(point2.basePrice);
  return price2 - price1;
});

