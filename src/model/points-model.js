// import {generatePoint} from '../mock/point.js';
import Observable from '../framework/observable.js';

const mockPoints =
  [
    {
      'id': '0',
      'type': 'train',
      'date_from': '2022-06-02T22:12:25.048Z',
      'date_to': '2022-06-03T13:06:43.935Z',
      'destination': {
        'name': 'Kopenhagen',
        'description': 'Kopenhagen, with crowded streets.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.09356526458477865',
            'description': 'Kopenhagen parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4338299714281988',
            'description': 'Kopenhagen central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6453628863321235',
            'description': 'Kopenhagen biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.644850706987677',
            'description': 'Kopenhagen park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.094005563772251',
            'description': 'Kopenhagen city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.18452843640427385',
            'description': 'Kopenhagen street market'
          }
        ]
      },
      'base_price': 600,
      'is_favorite': false,
      'offers': [
        1,
        2,
        3
      ]
    },
    {
      'id': '1',
      'type': 'sightseeing',
      'date_from': '2022-06-03T13:06:43.935Z',
      'date_to': '2022-06-03T17:05:32.896Z',
      'destination': {
        'name': 'Venice',
        'description': 'Venice, is a beautiful city.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.24537278370137794',
            'description': 'Venice city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.32895952512503346',
            'description': 'Venice street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4491005637230179',
            'description': 'Venice embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5938166578587167',
            'description': 'Venice city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.2137894940252154',
            'description': 'Venice street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.2679983045564005',
            'description': 'Venice kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9452593756704768',
            'description': 'Venice central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4834080283277946',
            'description': 'Venice city centre'
          }
        ]
      },
      'base_price': 800,
      'is_favorite': true,
      'offers': []
    },
    {
      'id': '2',
      'type': 'bus',
      'date_from': '2022-06-03T17:05:32.896Z',
      'date_to': '2022-06-03T22:50:37.878Z',
      'destination': {
        'name': 'Kopenhagen',
        'description': 'Kopenhagen, a true asian pearl, in a middle of Europe, middle-eastern paradise, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.16820061378731022',
            'description': 'Kopenhagen street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7424639059198621',
            'description': 'Kopenhagen biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7069712302048687',
            'description': 'Kopenhagen parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.01611179843701871',
            'description': 'Kopenhagen parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.06493548157502027',
            'description': 'Kopenhagen zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.30340320889186945',
            'description': 'Kopenhagen park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.43898626953350006',
            'description': 'Kopenhagen central station'
          }
        ]
      },
      'base_price': 1000,
      'is_favorite': true,
      'offers': [
        1,
        2,
        3
      ]
    },
    {
      'id': '3',
      'type': 'flight',
      'date_from': '2022-06-03T22:50:37.878Z',
      'date_to': '2022-06-04T06:56:27.316Z',
      'destination': {
        'name': 'Den Haag',
        'description': 'Den Haag, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.036704669181106375',
            'description': 'Den Haag kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9611542736276526',
            'description': 'Den Haag parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.12590929418846497',
            'description': 'Den Haag park'
          }
        ]
      },
      'base_price': 800,
      'is_favorite': false,
      'offers': [
        1,
        3,
        4,
        6
      ]
    },
    {
      'id': '4',
      'type': 'restaurant',
      'date_from': '2022-06-04T06:56:27.316Z',
      'date_to': '2022-06-05T03:09:32.672Z',
      'destination': {
        'name': 'Hiroshima',
        'description': 'Hiroshima, in a middle of Europe, with a beautiful old town, middle-eastern paradise, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.7440272878030094',
            'description': 'Hiroshima kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.33423884851928864',
            'description': 'Hiroshima zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.09277746164552214',
            'description': 'Hiroshima kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.38479960731203944',
            'description': 'Hiroshima embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.47857807713533806',
            'description': 'Hiroshima park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7479462924159759',
            'description': 'Hiroshima park'
          }
        ]
      },
      'base_price': 300,
      'is_favorite': true,
      'offers': [
        1,
        2
      ]
    },
    {
      'id': '5',
      'type': 'restaurant',
      'date_from': '2022-06-05T03:09:32.672Z',
      'date_to': '2022-06-05T17:32:33.664Z',
      'destination': {
        'name': 'Barcelona',
        'description': 'Barcelona, is a beautiful city, with an embankment of a mighty river as a centre of attraction.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.45589494826205934',
            'description': 'Barcelona kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9083402946633072',
            'description': 'Barcelona embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9348421554046238',
            'description': 'Barcelona biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.2020041704521114',
            'description': 'Barcelona kindergarten'
          }
        ]
      },
      'base_price': 700,
      'is_favorite': false,
      'offers': [
        1,
        2
      ]
    },
    {
      'id': '6',
      'type': 'flight',
      'date_from': '2022-06-05T17:32:33.664Z',
      'date_to': '2022-06-05T21:26:28.167Z',
      'destination': {
        'name': 'Madrid',
        'description': 'Madrid, is a beautiful city, a true asian pearl, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.12458227720081583',
            'description': 'Madrid embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9497541942417935',
            'description': 'Madrid park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7858016113696324',
            'description': 'Madrid street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.1398565435525494',
            'description': 'Madrid zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.18423469172502238',
            'description': 'Madrid city centre'
          }
        ]
      },
      'base_price': 500,
      'is_favorite': false,
      'offers': [
        3,
        4
      ]
    },
    {
      'id': '7',
      'type': 'taxi',
      'date_from': '2022-06-05T21:26:28.167Z',
      'date_to': '2022-06-06T16:18:51.054Z',
      'destination': {
        'name': 'Vien',
        'description': 'Vien, a true asian pearl, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.5706808633286113',
            'description': 'Vien zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9817180183252174',
            'description': 'Vien city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.48931973631106795',
            'description': 'Vien kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3486648132683927',
            'description': 'Vien biggest supermarket'
          }
        ]
      },
      'base_price': 500,
      'is_favorite': false,
      'offers': [
        4,
        5
      ]
    },
    {
      'id': '8',
      'type': 'ship',
      'date_from': '2022-06-06T16:18:51.054Z',
      'date_to': '2022-06-07T01:30:44.583Z',
      'destination': {
        'name': 'Sochi',
        'description': 'Sochi, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.794487461144981',
            'description': 'Sochi street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.08603026613812559',
            'description': 'Sochi embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.2047579302221969',
            'description': 'Sochi biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3742305431170738',
            'description': 'Sochi street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.35297478805292637',
            'description': 'Sochi park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.19392096255737568',
            'description': 'Sochi biggest supermarket'
          }
        ]
      },
      'base_price': 500,
      'is_favorite': true,
      'offers': [
        1,
        3,
        5
      ]
    },
    {
      'id': '9',
      'type': 'drive',
      'date_from': '2022-06-07T01:30:44.583Z',
      'date_to': '2022-06-07T14:56:29.669Z',
      'destination': {
        'name': 'Barcelona',
        'description': 'Barcelona, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.1971776971965542',
            'description': 'Barcelona biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.48194411504378953',
            'description': 'Barcelona zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3890181951178693',
            'description': 'Barcelona central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.030477108149092658',
            'description': 'Barcelona parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6344329541680038',
            'description': 'Barcelona parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.78930640635775',
            'description': 'Barcelona parliament building'
          }
        ]
      },
      'base_price': 700,
      'is_favorite': false,
      'offers': [
        1,
        2
      ]
    },
    {
      'id': '10',
      'type': 'drive',
      'date_from': '2022-06-07T14:56:29.669Z',
      'date_to': '2022-06-08T02:47:31.953Z',
      'destination': {
        'name': 'Milan',
        'description': 'Milan, is a beautiful city, with crowded streets, in a middle of Europe.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.8626305166923549',
            'description': 'Milan street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6271219526031939',
            'description': 'Milan biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.19559517253402503',
            'description': 'Milan biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7979390534879425',
            'description': 'Milan embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6412962801447464',
            'description': 'Milan park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3274250729630144',
            'description': 'Milan zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.021209230225016418',
            'description': 'Milan parliament building'
          }
        ]
      },
      'base_price': 900,
      'is_favorite': true,
      'offers': [
        1,
        2
      ]
    },
    {
      'id': '11',
      'type': 'bus',
      'date_from': '2022-06-08T02:47:31.953Z',
      'date_to': '2022-06-08T22:11:36.114Z',
      'destination': {
        'name': 'Paris',
        'description': 'Paris, with a beautiful old town, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.28135299192523533',
            'description': 'Paris kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8680637291899778',
            'description': 'Paris parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9542291482130867',
            'description': 'Paris street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4503515625144525',
            'description': 'Paris biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.879113862778842',
            'description': 'Paris park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7008719431982466',
            'description': 'Paris parliament building'
          }
        ]
      },
      'base_price': 900,
      'is_favorite': false,
      'offers': [
        1,
        2,
        3
      ]
    },
    {
      'id': '12',
      'type': 'restaurant',
      'date_from': '2022-06-08T22:11:36.114Z',
      'date_to': '2022-06-09T11:16:06.847Z',
      'destination': {
        'name': 'Saint Petersburg',
        'description': 'Saint Petersburg, is a beautiful city, in a middle of Europe, with a beautiful old town, for those who value comfort and coziness.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.4811355739625036',
            'description': 'Saint Petersburg city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4053282820055195',
            'description': 'Saint Petersburg central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.43478847081615135',
            'description': 'Saint Petersburg embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.37164799662301884',
            'description': 'Saint Petersburg embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7694562799080804',
            'description': 'Saint Petersburg kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4512623087824976',
            'description': 'Saint Petersburg zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.23288250869534588',
            'description': 'Saint Petersburg embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8711753775823479',
            'description': 'Saint Petersburg park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7752031401502064',
            'description': 'Saint Petersburg embankment'
          }
        ]
      },
      'base_price': 1000,
      'is_favorite': true,
      'offers': [
        1,
        2
      ]
    },
    {
      'id': '13',
      'type': 'sightseeing',
      'date_from': '2022-06-09T11:16:06.847Z',
      'date_to': '2022-06-09T20:33:00.090Z',
      'destination': {
        'name': 'Chamonix',
        'description': 'Chamonix, a true asian pearl, with crowded streets, in a middle of Europe, with a beautiful old town, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.17601430491199488',
            'description': 'Chamonix kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.49953164311208464',
            'description': 'Chamonix zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.14844905544421616',
            'description': 'Chamonix embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.859731948689811',
            'description': 'Chamonix zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8928850888407642',
            'description': 'Chamonix zoo'
          }
        ]
      },
      'base_price': 300,
      'is_favorite': false,
      'offers': []
    },
    {
      'id': '14',
      'type': 'check-in',
      'date_from': '2022-06-09T20:33:00.090Z',
      'date_to': '2022-06-10T06:34:31.219Z',
      'destination': {
        'name': 'Milan',
        'description': 'Milan, middle-eastern paradise, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.040147699588747754',
            'description': 'Milan street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.796616598297663',
            'description': 'Milan city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9602668548664974',
            'description': 'Milan park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4148963085322055',
            'description': 'Milan central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9424079978983575',
            'description': 'Milan central station'
          }
        ]
      },
      'base_price': 500,
      'is_favorite': true,
      'offers': [
        1,
        2,
        3,
        4,
        5
      ]
    },
    {
      'id': '15',
      'type': 'taxi',
      'date_from': '2022-06-10T06:34:31.219Z',
      'date_to': '2022-06-11T03:21:07.370Z',
      'destination': {
        'name': 'Munich',
        'description': 'Munich, is a beautiful city, a true asian pearl, in a middle of Europe, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.3796349728402868',
            'description': 'Munich city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7771372729380326',
            'description': 'Munich street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6703591038016075',
            'description': 'Munich zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.521713991309283',
            'description': 'Munich kindergarten'
          }
        ]
      },
      'base_price': 500,
      'is_favorite': false,
      'offers': [
        1,
        2,
        3,
        4,
        5
      ]
    },
    {
      'id': '16',
      'type': 'sightseeing',
      'date_from': '2022-06-11T03:21:07.370Z',
      'date_to': '2022-06-11T23:31:20.170Z',
      'destination': {
        'name': 'Monaco',
        'description': 'Monaco, with crowded streets, with a beautiful old town, middle-eastern paradise, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.717022500903089',
            'description': 'Monaco kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.08809639165987981',
            'description': 'Monaco park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6922484327707172',
            'description': 'Monaco embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.14680046992025186',
            'description': 'Monaco city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.45200962606736517',
            'description': 'Monaco zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.19008307769235433',
            'description': 'Monaco kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.32086496032407674',
            'description': 'Monaco biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.33855511721805387',
            'description': 'Monaco biggest supermarket'
          }
        ]
      },
      'base_price': 1000,
      'is_favorite': true,
      'offers': []
    },
    {
      'id': '17',
      'type': 'ship',
      'date_from': '2022-06-11T23:31:20.170Z',
      'date_to': '2022-06-12T14:27:35.872Z',
      'destination': {
        'name': 'Sochi',
        'description': 'Sochi, a true asian pearl, middle-eastern paradise, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.3469254252765188',
            'description': 'Sochi zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8484698010470373',
            'description': 'Sochi city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.646945677370879',
            'description': 'Sochi biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.276548505139361',
            'description': 'Sochi street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.033439887606654395',
            'description': 'Sochi city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6698719763808763',
            'description': 'Sochi biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.41176619888742927',
            'description': 'Sochi street market'
          }
        ]
      },
      'base_price': 600,
      'is_favorite': true,
      'offers': [
        1,
        3,
        4,
        6
      ]
    },
    {
      'id': '18',
      'type': 'drive',
      'date_from': '2022-06-12T14:27:35.872Z',
      'date_to': '2022-06-12T16:43:31.669Z',
      'destination': {
        'name': 'Paris',
        'description': 'Paris, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.06150392604360411',
            'description': 'Paris kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.23131692974150098',
            'description': 'Paris city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.452355700996264',
            'description': 'Paris park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8810463137915137',
            'description': 'Paris street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5108452117614397',
            'description': 'Paris biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.19982710786559021',
            'description': 'Paris kindergarten'
          }
        ]
      },
      'base_price': 300,
      'is_favorite': false,
      'offers': [
        1,
        2
      ]
    },
    {
      'id': '19',
      'type': 'check-in',
      'date_from': '2022-06-12T16:43:31.669Z',
      'date_to': '2022-06-13T03:47:16.382Z',
      'destination': {
        'name': 'Naples',
        'description': 'Naples, with crowded streets, with a beautiful old town, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.16457878559985795',
            'description': 'Naples zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9512407927141353',
            'description': 'Naples biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4021318648356573',
            'description': 'Naples street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5729993326591933',
            'description': 'Naples kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.11961771567161228',
            'description': 'Naples zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8909161393807115',
            'description': 'Naples street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6212790247425213',
            'description': 'Naples parliament building'
          }
        ]
      },
      'base_price': 1000,
      'is_favorite': true,
      'offers': [
        1,
        2,
        4
      ]
    }
  ];


const polymorph = (obj) => ({
  'id': obj.id,
  'type': obj.type,
  'dateFrom': obj.date_from,
  'dateTo': obj.date_to,
  'destination': {
    'name': obj.destination.name,
    'description': obj.destination.description,
    'pictures': obj.destination.pictures
  },
  'offers': obj.offers,
  'basePrice': obj.base_price,
  'isFavorite': obj.is_favorite,
});

const points = mockPoints.map((obj) => polymorph(obj));

export default class PointsModel extends Observable{
  #points = points;

  get points() {
    return this.#points;
  }

  updatePoint = (updateType, update) => {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  };

  addPoint = (updateType, update) => {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  };

  deletePoint = (updateType, update) => {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  };
}
