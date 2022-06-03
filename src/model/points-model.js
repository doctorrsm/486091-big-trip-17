// import {generatePoint} from '../mock/point.js';
import Observable from '../framework/observable.js';

const mockPoints =
  [
    {
      'id': '0',
      'type': 'train',
      'date_from': '2022-05-20T22:51:57.178Z',
      'date_to': '2022-05-21T07:14:53.652Z',
      'destination': {
        'name': 'Berlin',
        'description': 'Berlin, in a middle of Europe, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.9832939836528052',
            'description': 'Berlin street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5761168443809799',
            'description': 'Berlin central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.2357596188564679',
            'description': 'Berlin zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.983803995920929',
            'description': 'Berlin kindergarten'
          }
        ]
      },
      'base_price': 700,
      'is_favorite': true,
      'offers': [
        1,
        2,
        3
      ]
    },
    {
      'id': '1',
      'type': 'ship',
      'date_from': '2022-05-21T07:14:53.652Z',
      'date_to': '2022-05-22T01:32:25.189Z',
      'destination': {
        'name': 'Venice',
        'description': 'Venice, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.5963426186387137',
            'description': 'Venice central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.26581751097238615',
            'description': 'Venice biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9273777943179506',
            'description': 'Venice embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4475617620389274',
            'description': 'Venice kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.01647995714046413',
            'description': 'Venice central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3884727410409532',
            'description': 'Venice park'
          }
        ]
      },
      'base_price': 800,
      'is_favorite': true,
      'offers': [
        3,
        4
      ]
    },
    {
      'id': '2',
      'type': 'ship',
      'date_from': '2022-05-22T01:32:25.189Z',
      'date_to': '2022-05-22T13:35:05.477Z',
      'destination': {
        'name': 'Chamonix',
        'description': 'Chamonix, a true asian pearl, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.9344576159331914',
            'description': 'Chamonix city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.45901570845882045',
            'description': 'Chamonix street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7344056350642083',
            'description': 'Chamonix biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.21511031207320053',
            'description': 'Chamonix parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.14550732676359468',
            'description': 'Chamonix city centre'
          }
        ]
      },
      'base_price': 300,
      'is_favorite': true,
      'offers': [
        5,
        6
      ]
    },
    {
      'id': '3',
      'type': 'drive',
      'date_from': '2022-05-22T13:35:05.477Z',
      'date_to': '2022-05-23T04:24:17.579Z',
      'destination': {
        'name': 'Valencia',
        'description': 'Valencia, with crowded streets, middle-eastern paradise, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.05682542784421063',
            'description': 'Valencia central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8835301725350897',
            'description': 'Valencia parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.752920422089908',
            'description': 'Valencia park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8498741272145862',
            'description': 'Valencia central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9156421902830005',
            'description': 'Valencia zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5960778070149859',
            'description': 'Valencia embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4350539608013',
            'description': 'Valencia parliament building'
          }
        ]
      },
      'base_price': 400,
      'is_favorite': false,
      'offers': [
        1,
        2
      ]
    },
    {
      'id': '4',
      'type': 'taxi',
      'date_from': '2022-05-23T04:24:17.579Z',
      'date_to': '2022-05-23T22:39:56.976Z',
      'destination': {
        'name': 'Kioto',
        'description': 'Kioto, is a beautiful city, with crowded streets, in a middle of Europe, full of of cozy canteens where you can try the best coffee in the Middle East.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.7524049794921039',
            'description': 'Kioto parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.98329489200281',
            'description': 'Kioto biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4324857574320624',
            'description': 'Kioto park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7897290478743257',
            'description': 'Kioto central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.10490582347629496',
            'description': 'Kioto kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3779451206232778',
            'description': 'Kioto kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.856186112578394',
            'description': 'Kioto city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.04387358599924518',
            'description': 'Kioto city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.20280262858631826',
            'description': 'Kioto zoo'
          }
        ]
      },
      'base_price': 700,
      'is_favorite': true,
      'offers': [
        2,
        3,
        4
      ]
    },
    {
      'id': '5',
      'type': 'flight',
      'date_from': '2022-05-23T22:39:56.976Z',
      'date_to': '2022-05-24T20:34:05.326Z',
      'destination': {
        'name': 'Frankfurt',
        'description': 'Frankfurt, in a middle of Europe, with a beautiful old town, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.9494476808596963',
            'description': 'Frankfurt zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.43214725268442344',
            'description': 'Frankfurt zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6891596819250876',
            'description': 'Frankfurt city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8735951809430542',
            'description': 'Frankfurt parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8031666508854991',
            'description': 'Frankfurt city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6741706699382959',
            'description': 'Frankfurt kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.2969127991040894',
            'description': 'Frankfurt biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6088221081484646',
            'description': 'Frankfurt street market'
          }
        ]
      },
      'base_price': 800,
      'is_favorite': true,
      'offers': [
        2,
        4
      ]
    },
    {
      'id': '6',
      'type': 'bus',
      'date_from': '2022-05-24T20:34:05.326Z',
      'date_to': '2022-05-25T15:54:53.605Z',
      'destination': {
        'name': 'Paris',
        'description': 'Paris, is a beautiful city, in a middle of Europe, for those who value comfort and coziness.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.12004383674160235',
            'description': 'Paris kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.1006115216644996',
            'description': 'Paris kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9772945154503094',
            'description': 'Paris embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9482842264836673',
            'description': 'Paris kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9853640050290684',
            'description': 'Paris biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.36992545393057386',
            'description': 'Paris park'
          }
        ]
      },
      'base_price': 300,
      'is_favorite': true,
      'offers': [
        1,
        2,
        3
      ]
    },
    {
      'id': '7',
      'type': 'drive',
      'date_from': '2022-05-25T15:54:53.605Z',
      'date_to': '2022-05-26T01:16:56.138Z',
      'destination': {
        'name': 'Den Haag',
        'description': 'Den Haag, a true asian pearl, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.06854762358224398',
            'description': 'Den Haag kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.2924223212069359',
            'description': 'Den Haag city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8105558108362496',
            'description': 'Den Haag street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.22259016849007196',
            'description': 'Den Haag parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4341247394652379',
            'description': 'Den Haag biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.0837940552848131',
            'description': 'Den Haag park'
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
      'id': '8',
      'type': 'train',
      'date_from': '2022-05-26T01:16:56.138Z',
      'date_to': '2022-05-26T18:09:04.660Z',
      'destination': {
        'name': 'Madrid',
        'description': 'Madrid, is a beautiful city.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.6476228405046935',
            'description': 'Madrid kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9741208568534769',
            'description': 'Madrid parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.07537610836750108',
            'description': 'Madrid street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9774657898545336',
            'description': 'Madrid park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4874777873267271',
            'description': 'Madrid embankment'
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
      'id': '9',
      'type': 'check-in',
      'date_from': '2022-05-26T18:09:04.660Z',
      'date_to': '2022-05-26T23:19:49.970Z',
      'destination': {
        'name': 'Paris',
        'description': 'Paris, with crowded streets, in a middle of Europe, with a beautiful old town, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.6353496622607819',
            'description': 'Paris embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.24555407812693542',
            'description': 'Paris city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9234437757163794',
            'description': 'Paris embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3193910922869092',
            'description': 'Paris central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.18869776972049723',
            'description': 'Paris embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6175543605551383',
            'description': 'Paris zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9378436464210453',
            'description': 'Paris kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.713762281112599',
            'description': 'Paris parliament building'
          }
        ]
      },
      'base_price': 1000,
      'is_favorite': false,
      'offers': [
        2,
        4,
        5
      ]
    },
    {
      'id': '10',
      'type': 'check-in',
      'date_from': '2022-05-26T23:19:49.970Z',
      'date_to': '2022-05-27T05:53:47.374Z',
      'destination': {
        'name': 'Tokio',
        'description': 'Tokio, for those who value comfort and coziness, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.7362615563129411',
            'description': 'Tokio city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9816155911674258',
            'description': 'Tokio central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.11477115005156824',
            'description': 'Tokio zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7436094154563224',
            'description': 'Tokio city centre'
          }
        ]
      },
      'base_price': 1000,
      'is_favorite': true,
      'offers': [
        1,
        3,
        4,
        5
      ]
    },
    {
      'id': '11',
      'type': 'ship',
      'date_from': '2022-05-27T05:53:47.374Z',
      'date_to': '2022-05-27T14:32:37.154Z',
      'destination': {
        'name': 'Valencia',
        'description': 'Valencia, is a beautiful city.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.3243137608870017',
            'description': 'Valencia embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8334470527630007',
            'description': 'Valencia central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8599763869361647',
            'description': 'Valencia park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.37542834911605727',
            'description': 'Valencia parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5615205981843581',
            'description': 'Valencia parliament building'
          }
        ]
      },
      'base_price': 400,
      'is_favorite': false,
      'offers': [
        1,
        2,
        3,
        4,
        5,
        6
      ]
    },
    {
      'id': '12',
      'type': 'taxi',
      'date_from': '2022-05-27T14:32:37.154Z',
      'date_to': '2022-05-28T01:04:14.829Z',
      'destination': {
        'name': 'Chamonix',
        'description': 'Chamonix, with crowded streets, with a beautiful old town, middle-eastern paradise.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.09499902959382522',
            'description': 'Chamonix central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9406414140469459',
            'description': 'Chamonix parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.0382682821033149',
            'description': 'Chamonix biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8439433455136962',
            'description': 'Chamonix kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8499755790050598',
            'description': 'Chamonix parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.21681896786088073',
            'description': 'Chamonix zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6870404680107267',
            'description': 'Chamonix parliament building'
          }
        ]
      },
      'base_price': 800,
      'is_favorite': false,
      'offers': [
        3,
        5
      ]
    },
    {
      'id': '13',
      'type': 'bus',
      'date_from': '2022-05-28T01:04:14.829Z',
      'date_to': '2022-05-28T23:19:37.404Z',
      'destination': {
        'name': 'Nagasaki',
        'description': 'Nagasaki, a true asian pearl, middle-eastern paradise, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.2952041084257282',
            'description': 'Nagasaki embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6887409424299717',
            'description': 'Nagasaki central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8565663474495395',
            'description': 'Nagasaki city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.07593727861592003',
            'description': 'Nagasaki zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.1775222400135419',
            'description': 'Nagasaki kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5698486802151326',
            'description': 'Nagasaki parliament building'
          }
        ]
      },
      'base_price': 500,
      'is_favorite': true,
      'offers': [
        1,
        2,
        3
      ]
    },
    {
      'id': '14',
      'type': 'drive',
      'date_from': '2022-05-28T23:19:37.404Z',
      'date_to': '2022-05-29T12:24:10.146Z',
      'destination': {
        'name': 'Oslo',
        'description': 'Oslo, in a middle of Europe, middle-eastern paradise.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.8233947555230876',
            'description': 'Oslo park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.12754624857072727',
            'description': 'Oslo city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6874642685672212',
            'description': 'Oslo park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9376518303248897',
            'description': 'Oslo biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7799394416644365',
            'description': 'Oslo park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4083179480857497',
            'description': 'Oslo city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9270074788322595',
            'description': 'Oslo street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5593207570268375',
            'description': 'Oslo central station'
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
      'id': '15',
      'type': 'check-in',
      'date_from': '2022-05-29T12:24:10.146Z',
      'date_to': '2022-05-30T00:00:19.761Z',
      'destination': {
        'name': 'Valencia',
        'description': 'Valencia, with a beautiful old town, middle-eastern paradise.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.23914873477137522',
            'description': 'Valencia city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.40343765179892377',
            'description': 'Valencia central station'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4289178844516983',
            'description': 'Valencia park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5481908741360542',
            'description': 'Valencia parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8429923123367817',
            'description': 'Valencia biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3585731686468363',
            'description': 'Valencia biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.2511042870065028',
            'description': 'Valencia park'
          }
        ]
      },
      'base_price': 600,
      'is_favorite': true,
      'offers': [
        1,
        3,
        4,
        5
      ]
    },
    {
      'id': '16',
      'type': 'check-in',
      'date_from': '2022-05-30T00:00:19.761Z',
      'date_to': '2022-05-30T16:48:12.142Z',
      'destination': {
        'name': 'Rome',
        'description': 'Rome, is a beautiful city, a true asian pearl, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.8009305001689508',
            'description': 'Rome kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7972315495665987',
            'description': 'Rome zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.46098250685159226',
            'description': 'Rome park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.18200002809266258',
            'description': 'Rome park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7434159116417756',
            'description': 'Rome street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.40901573937417934',
            'description': 'Rome street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.7025564950159493',
            'description': 'Rome embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.5331059678668015',
            'description': 'Rome zoo'
          }
        ]
      },
      'base_price': 1100,
      'is_favorite': true,
      'offers': [
        1,
        2,
        4,
        5
      ]
    },
    {
      'id': '17',
      'type': 'sightseeing',
      'date_from': '2022-05-30T16:48:12.142Z',
      'date_to': '2022-05-31T15:30:40.186Z',
      'destination': {
        'name': 'Vien',
        'description': 'Vien, a true asian pearl, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.23260390521310126',
            'description': 'Vien city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.8407404353349737',
            'description': 'Vien biggest supermarket'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6797653923703346',
            'description': 'Vien embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.20748192816930788',
            'description': 'Vien street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.9695949544148807',
            'description': 'Vien embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4454705586723213',
            'description': 'Vien central station'
          }
        ]
      },
      'base_price': 1100,
      'is_favorite': false,
      'offers': []
    },
    {
      'id': '18',
      'type': 'drive',
      'date_from': '2022-05-31T15:30:40.186Z',
      'date_to': '2022-06-01T11:16:17.343Z',
      'destination': {
        'name': 'Den Haag',
        'description': 'Den Haag, is a beautiful city.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.04912489434065215',
            'description': 'Den Haag street market'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.643119064734252',
            'description': 'Den Haag kindergarten'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.3256022252620421',
            'description': 'Den Haag embankment'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.6413569184835031',
            'description': 'Den Haag parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.447662797371734',
            'description': 'Den Haag city centre'
          }
        ]
      },
      'base_price': 1100,
      'is_favorite': false,
      'offers': [
        1,
        2
      ]
    },
    {
      'id': '19',
      'type': 'restaurant',
      'date_from': '2022-06-01T11:16:17.343Z',
      'date_to': '2022-06-02T06:39:49.178Z',
      'destination': {
        'name': 'Chamonix',
        'description': 'Chamonix, is a beautiful city, in a middle of Europe, a perfect place to stay with a family.',
        'pictures': [
          {
            'src': 'http://picsum.photos/300/200?r=0.5087894809592857',
            'description': 'Chamonix city centre'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.401754718683913',
            'description': 'Chamonix zoo'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.020382982549356887',
            'description': 'Chamonix parliament building'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.4467409894886498',
            'description': 'Chamonix park'
          },
          {
            'src': 'http://picsum.photos/300/200?r=0.0975310676846406',
            'description': 'Chamonix zoo'
          }
        ]
      },
      'base_price': 500,
      'is_favorite': false,
      'offers': [
        1,
        2
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
