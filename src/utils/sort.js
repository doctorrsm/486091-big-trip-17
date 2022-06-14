import dayjs from 'dayjs';

export const sortByDate = (point1, point2) =>  {
  const date1From = dayjs(point1.dateFrom);
  const date1To = dayjs(point1.dateTo);
  const date1Diff = date1To.diff(date1From);

  const date2From = dayjs(point2.dateFrom);
  const date2To = dayjs(point2.dateTo);
  const date2Diff = date2To.diff(date2From);

  return date2Diff - date1Diff;

};


export const sortByPrice = (point1, point2) => {
  const price1 = dayjs(point1.basePrice);
  const price2 = dayjs(point2.basePrice);
  return price2 - price1;
};

export const sortByDay = (point1, point2) => {
  const date1From = dayjs(point1.dateFrom);
  const date2From = dayjs(point2.dateFrom);
  return date1From.diff(date2From);
};

