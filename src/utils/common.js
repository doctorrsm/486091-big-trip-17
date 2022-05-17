// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const updateItem = (items, update) => {
  console.log('Items внутри функции updateItem', items)
  const index = items.findIndex((item) => {

    return item.id === update.id;
  });

  if (index === -1) {
    return items;
  }

  const x = [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ]

  return x;
};

export {getRandomInteger, updateItem};
