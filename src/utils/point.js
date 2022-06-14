import dayjs from 'dayjs';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

class HumanizeEvent {
  getTime(time) {
    return dayjs(time).format('HH:mm');
  }

  getDatetimeForTime(time) {
    const firstPart = dayjs(time).format('YYYY-MM-DD');
    const lastPart = dayjs(time).format('hh:mm');
    return `${firstPart  }T${  lastPart}`;
  }

  getDay(time) {
    return dayjs(time).format('MMM DD');
  }

  getDatetimeForDay(time) {
    return dayjs(time).format('YYYY-MM-DD');
  }

  getTimeForInputValue(time) {
    return dayjs(time).format(' DD/MM/YY hh:mm ');
  }


}

const viewTimeWithZero = (time) => (time < 10) ?   `0${time}` :  time;


const getTimeDifference = (time1, time2) => {
  const date1 = dayjs(time1).startOf('minute');
  const date2 = dayjs(time2).startOf('minute');

  const hours = date2.diff(date1, 'hour');

  if (hours >= 24) {
    const days = date2.diff(date1, 'day');

    const hoursLeftCount = hours - days*24;
    const minutes = date2.diff(date1, 'minute');
    const minutesLeftCount = minutes - days*1440 - hoursLeftCount*60;

    return `${viewTimeWithZero(days)}D ${viewTimeWithZero(hoursLeftCount)}H ${viewTimeWithZero(minutesLeftCount)}M`;
  }

  if (hours < 24 && hours > 1) {
    const minutes = date2.diff(date1, 'minute');
    const minutesLeftCount = minutes - hours*60;
    return `${viewTimeWithZero(hours)}H ${viewTimeWithZero(minutesLeftCount)}M`;
  }

  if (hours < 1) {
    const minutes = date2.diff(date1, 'minute');

    return `${viewTimeWithZero(minutes)}M`;
  }

};

export { capitalizeFirstLetter, getTimeDifference, HumanizeEvent};
