import {getRandomInteger} from '../utils.js';

const pointTypes = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];


const getPointType = () => pointTypes[getRandomInteger(0, pointTypes.length-1)];

export const generatePoint = () => ({
  'id': '0',
  'type': getPointType(),
  'dateFrom': '2022-04-26T13:35:08.214Z',
  'dateTo': '2022-04-26T18:55:08.214Z', //'2022-04-27T06:06:03.864Z'
  'destination': {
    'name': 'Amsterdam',
    'description': 'Amsterdam, in a middle of Europe, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.2571614807272591',
        'description': 'Amsterdam biggest supermarket'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.26376754020077775',
        'description': 'Amsterdam street market'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.6573844812583827',
        'description': 'Amsterdam city centre'
      },
      {
        'src': 'http://picsum.photos/300/200?r=0.9252260341023861',
        'description': 'Amsterdam parliament building'
      }
    ]
  },
  'basePrice': 500,
  'isFavorite': false,
  'offers': [
    {
      'id': 1,
      'title': 'Infotainment system',
      'price': 50
    },
    {
      'id': 2,
      'title': 'Order meal',
      'price': 100
    },
    {
      'id': 3,
      'title': 'Choose seats',
      'price': 190
    }
  ]

});
