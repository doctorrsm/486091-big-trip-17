import dayjs from 'dayjs';

let currentDay = dayjs();

console.log(`Current day is ${currentDay}`);

export const filterFuture = (events) =>{
  const filteredEvents =  events.filter((point) => {
    const dateFrom = dayjs(point.dateFrom);
    const dateTo = dayjs(point.dateTo);

    if(dateFrom.isBefore(currentDay) && dateTo.isAfter(currentDay)) {
      return true;
    }
    return currentDay.isBefore(dateFrom);
  });
  console.log(filteredEvents);
};


export const filterPast = (events) =>{
  const filteredEvents =  events.filter((point) => {
    const dateFrom = dayjs(point.dateFrom);
    const dateTo = dayjs(point.dateTo);
    if(dateFrom.isBefore(currentDay) && dateTo.isAfter(currentDay)) {
      return true;
    }
    return dateFrom.isBefore(currentDay);
  });
  console.log(filteredEvents);
};
