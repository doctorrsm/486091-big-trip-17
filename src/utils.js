import dayjs from 'dayjs';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const humanizeEventDate = (eventDate) => dayjs(eventDate).format('HH:mm');

const getTimeDifference = (time1, time2) => {
  const date1 = dayjs(time1);
  const date2 = dayjs(time2);

  const hours = date2.diff(date1, 'hours');

  if (hours >= 24) {
    const days = date2.diff(date1, 'days');
    const hoursLeftCount = hours - days*24;
    const minutes = date2.diff(date1, 'minutes');
    const minutesLeftCount = minutes - days*1440 - hoursLeftCount*60;

    return `${hoursLeftCount}D ${hoursLeftCount}H ${minutesLeftCount}M`;
  }

  if (hours < 24 && hours > 1) {
    const minutes = date2.diff(date1, 'minutes');
    const minutesLeftCount = minutes - hours*60;
    return `${hours}H ${minutesLeftCount}M`;
  }

  if (hours < 1) {
    const minutes = date2.diff(date1, 'minutes');
    return `${minutes}M`;
  }

};

export {getRandomInteger, capitalizeFirstLetter, humanizeEventDate, getTimeDifference};
