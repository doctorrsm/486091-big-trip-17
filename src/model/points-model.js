import {generatePoint} from '../mock/point';

const mockPoints = [
  {
    id: '0',
    type: 'taxi',
    date_from: '2022-05-07T18:59:03.322Z',
    date_to: '2022-05-08T10:02:07.948Z',
    destination: {
      name: 'Nagasaki',
      description: 'Nagasaki, is a beautiful city, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.7767050246111522',
          description: 'Nagasaki embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.08521968701386085',
          description: 'Nagasaki street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.9377586657875145',
          description: 'Nagasaki biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6480833765484346',
          description: 'Nagasaki embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6086774942675317',
          description: 'Nagasaki kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3922561927215036',
          description: 'Nagasaki zoo'
        }
      ]
    },
    base_price: 1100,
    is_favorite: true,
    offers: [
      {
        id: 3,
        title: 'Choose temperature',
        price: 170
      },
      {
        id: 5,
        title: 'Drive slowly',
        price: 110
      }
    ]
  },
  {
    id: '1',
    type: 'bus',
    date_from: '2022-05-08T10:02:07.948Z',
    date_to: '2022-05-08T20:02:32.008Z',
    destination: {
      name: 'Helsinki',
      description: 'Helsinki, middle-eastern paradise.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.5483843368916066',
          description: 'Helsinki zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.19587266355514155',
          description: 'Helsinki street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.74732160083768',
          description: 'Helsinki street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.7978376265588054',
          description: 'Helsinki central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.12614157213187838',
          description: 'Helsinki city centre'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.7442208686463638',
          description: 'Helsinki parliament building'
        }
      ]
    },
    base_price: 500,
    is_favorite: false,
    offers: [
      {
        id: 1,
        title: 'Infotainment system',
        price: 50
      },
      {
        id: 2,
        title: 'Order meal',
        price: 100
      },
      {
        id: 3,
        title: 'Choose seats',
        price: 190
      }
    ]
  },
  {
    id: '2',
    type: 'restaurant',
    date_from: '2022-05-08T20:02:32.008Z',
    date_to: '2022-05-09T03:24:48.583Z',
    destination: {
      name: 'Venice',
      description: 'Venice, is a beautiful city, a true asian pearl, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.818262791486156',
          description: 'Venice street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.5235083499585682',
          description: 'Venice city centre'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.09649485288670312',
          description: 'Venice park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.522326693213635',
          description: 'Venice biggest supermarket'
        }
      ]
    },
    base_price: 600,
    is_favorite: true,
    offers: [
      {
        id: 1,
        title: 'Choose live music',
        price: 150
      },
      {
        id: 2,
        title: 'Choose VIP area',
        price: 70
      }
    ]
  },
  {
    id: '3',
    type: 'check-in',
    date_from: '2022-05-09T03:24:48.583Z',
    date_to: '2022-05-09T12:51:58.912Z',
    destination: {
      name: 'Den Haag',
      description: 'Den Haag, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.35179689471911213',
          description: 'Den Haag embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.14653112413655078',
          description: 'Den Haag city centre'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3248621930879705',
          description: 'Den Haag central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.7277703629407926',
          description: 'Den Haag embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.869369522756102',
          description: 'Den Haag embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.7667557688175433',
          description: 'Den Haag city centre'
        }
      ]
    },
    base_price: 400,
    is_favorite: false,
    offers: [
      {
        id: 1,
        title: 'Choose the time of check-in',
        price: 70
      },
      {
        id: 2,
        title: 'Choose the time of check-out',
        price: 190
      },
      {
        id: 3,
        title: 'Add breakfast',
        price: 110
      },
      {
        id: 5,
        title: 'Order a meal from the restaurant',
        price: 30
      }
    ]
  },
  {
    id: '4',
    type: 'bus',
    date_from: '2022-05-09T12:51:58.912Z',
    date_to: '2022-05-09T17:46:58.242Z',
    destination: {
      name: 'Munich',
      description: 'Munich, in a middle of Europe.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.5129458229819361',
          description: 'Munich central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.18467760490511398',
          description: 'Munich zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.4627275318383304',
          description: 'Munich kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8356657880139013',
          description: 'Munich street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8936137651628615',
          description: 'Munich kindergarten'
        }
      ]
    },
    base_price: 900,
    is_favorite: true,
    offers: [
      {
        id: 1,
        title: 'Infotainment system',
        price: 50
      },
      {
        id: 2,
        title: 'Order meal',
        price: 100
      },
      {
        id: 3,
        title: 'Choose seats',
        price: 190
      }
    ]
  },
  {
    id: '5',
    type: 'flight',
    date_from: '2022-05-09T17:46:58.242Z',
    date_to: '2022-05-09T22:19:48.905Z',
    destination: {
      name: 'Kioto',
      description: 'Kioto, is a beautiful city, with a beautiful old town, famous for its crowded street markets with the best street food in Asia.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.5039139664735042',
          description: 'Kioto street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.28523273865494203',
          description: 'Kioto kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.30746436600034976',
          description: 'Kioto zoo'
        }
      ]
    },
    base_price: 500,
    is_favorite: false,
    offers: [
      {
        id: 3,
        title: 'Upgrade to comfort class',
        price: 120
      },
      {
        id: 6,
        title: 'Business lounge',
        price: 160
      }
    ]
  },
  {
    id: '6',
    type: 'bus',
    date_from: '2022-05-09T22:19:48.905Z',
    date_to: '2022-05-10T16:02:36.947Z',
    destination: {
      name: 'Paris',
      description: 'Paris, is a beautiful city, with a beautiful old town, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.6318861168979983',
          description: 'Paris biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8902662250901274',
          description: 'Paris parliament building'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.08344951967624148',
          description: 'Paris park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.9000839586789242',
          description: 'Paris biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6943117834063104',
          description: 'Paris kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.852879766466816',
          description: 'Paris embankment'
        }
      ]
    },
    base_price: 900,
    is_favorite: true,
    offers: [
      {
        id: 1,
        title: 'Infotainment system',
        price: 50
      },
      {
        id: 2,
        title: 'Order meal',
        price: 100
      },
      {
        id: 3,
        title: 'Choose seats',
        price: 190
      }
    ]
  },
  {
    id: '7',
    type: 'ship',
    date_from: '2022-05-10T16:02:36.947Z',
    date_to: '2022-05-10T20:03:16.377Z',
    destination: {
      name: 'Monaco',
      description: 'Monaco, a true asian pearl, with crowded streets, famous for its crowded street markets with the best street food in Asia.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.46994804244638844',
          description: 'Monaco park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.36799949882523353',
          description: 'Monaco park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.988329903379233',
          description: 'Monaco street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6254038153844084',
          description: 'Monaco zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3100352576154959',
          description: 'Monaco street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.7995121426885583',
          description: 'Monaco biggest supermarket'
        }
      ]
    },
    base_price: 900,
    is_favorite: true,
    offers: [
      {
        id: 2,
        title: 'Choose seats',
        price: 160
      },
      {
        id: 4,
        title: 'Upgrade to business class',
        price: 150
      },
      {
        id: 5,
        title: 'Add luggage',
        price: 100
      },
      {
        id: 6,
        title: 'Business lounge',
        price: 40
      }
    ]
  },
  {
    id: '8',
    type: 'check-in',
    date_from: '2022-05-10T20:03:16.377Z',
    date_to: '2022-05-11T03:50:14.928Z',
    destination: {
      name: 'Berlin',
      description: 'Berlin, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.9619781059197832',
          description: 'Berlin embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.7348842700416538',
          description: 'Berlin street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.06010190763593548',
          description: 'Berlin biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3638274115426967',
          description: 'Berlin biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6306892088329994',
          description: 'Berlin zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8004094067054692',
          description: 'Berlin embankment'
        }
      ]
    },
    base_price: 700,
    is_favorite: true,
    offers: [
      {
        id: 2,
        title: 'Choose the time of check-out',
        price: 190
      },
      {
        id: 3,
        title: 'Add breakfast',
        price: 110
      },
      {
        id: 4,
        title: 'Laundry',
        price: 140
      }
    ]
  },
  {
    id: '9',
    type: 'check-in',
    date_from: '2022-05-11T03:50:14.928Z',
    date_to: '2022-05-11T10:00:48.412Z',
    destination: {
      name: 'Naples',
      description: 'Naples, in a middle of Europe, with a beautiful old town, with an embankment of a mighty river as a centre of attraction.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.024511712253142415',
          description: 'Naples city centre'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.4405119879680892',
          description: 'Naples biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.021511610898421685',
          description: 'Naples street market'
        }
      ]
    },
    base_price: 800,
    is_favorite: false,
    offers: [
      {
        id: 5,
        title: 'Order a meal from the restaurant',
        price: 30
      }
    ]
  },
  {
    id: '10',
    type: 'restaurant',
    date_from: '2022-05-11T10:00:48.412Z',
    date_to: '2022-05-11T21:34:54.125Z',
    destination: {
      name: 'Monaco',
      description: 'Monaco, with a beautiful old town, a perfect place to stay with a family.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.563411209199175',
          description: 'Monaco park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6608508407410507',
          description: 'Monaco biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.9924161551684667',
          description: 'Monaco biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.4696846521294906',
          description: 'Monaco embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.9772557455411961',
          description: 'Monaco zoo'
        }
      ]
    },
    base_price: 600,
    is_favorite: true,
    offers: [
      {
        id: 1,
        title: 'Choose live music',
        price: 150
      },
      {
        id: 2,
        title: 'Choose VIP area',
        price: 70
      }
    ]
  },
  {
    id: '11',
    type: 'ship',
    date_from: '2022-05-11T21:34:54.125Z',
    date_to: '2022-05-12T02:54:21.026Z',
    destination: {
      name: 'Nagasaki',
      description: 'Nagasaki, a true asian pearl, with crowded streets, in a middle of Europe, for those who value comfort and coziness.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.6908356157487687',
          description: 'Nagasaki zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.5187674257556596',
          description: 'Nagasaki street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.5498033809869294',
          description: 'Nagasaki zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3945657353817107',
          description: 'Nagasaki kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.009940777371296505',
          description: 'Nagasaki park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8478477800392719',
          description: 'Nagasaki zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3534552410355938',
          description: 'Nagasaki kindergarten'
        }
      ]
    },
    base_price: 900,
    is_favorite: true,
    offers: [
      {
        id: 1,
        title: 'Choose meal',
        price: 130
      },
      {
        id: 2,
        title: 'Choose seats',
        price: 160
      },
      {
        id: 3,
        title: 'Upgrade to comfort class',
        price: 170
      },
      {
        id: 6,
        title: 'Business lounge',
        price: 40
      }
    ]
  },
  {
    id: '12',
    type: 'check-in',
    date_from: '2022-05-12T02:54:21.026Z',
    date_to: '2022-05-12T13:02:04.908Z',
    destination: {
      name: 'Geneva',
      description: 'Geneva, is a beautiful city, with crowded streets, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.8847036394417922',
          description: 'Geneva street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.952320381293652',
          description: 'Geneva embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.42654169471001735',
          description: 'Geneva biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8338015758698532',
          description: 'Geneva zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.2791745812897277',
          description: 'Geneva city centre'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.5904318249658427',
          description: 'Geneva city centre'
        }
      ]
    },
    base_price: 500,
    is_favorite: false,
    offers: [
      {
        id: 1,
        title: 'Choose the time of check-in',
        price: 70
      },
      {
        id: 2,
        title: 'Choose the time of check-out',
        price: 190
      },
      {
        id: 3,
        title: 'Add breakfast',
        price: 110
      },
      {
        id: 4,
        title: 'Laundry',
        price: 140
      },
      {
        id: 5,
        title: 'Order a meal from the restaurant',
        price: 30
      }
    ]
  },
  {
    id: '13',
    type: 'flight',
    date_from: '2022-05-12T13:02:04.908Z',
    date_to: '2022-05-13T09:41:32.590Z',
    destination: {
      name: 'Madrid',
      description: 'Madrid, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.9584710377879082',
          description: 'Madrid central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.821726779964699',
          description: 'Madrid zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.7303057659399097',
          description: 'Madrid central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.015052359816138061',
          description: 'Madrid biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.040249121932734555',
          description: 'Madrid park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6851304456261484',
          description: 'Madrid zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.40008273189322496',
          description: 'Madrid embankment'
        }
      ]
    },
    base_price: 900,
    is_favorite: false,
    offers: [
      {
        id: 1,
        title: 'Choose meal',
        price: 120
      },
      {
        id: 2,
        title: 'Choose seats',
        price: 90
      },
      {
        id: 3,
        title: 'Upgrade to comfort class',
        price: 120
      },
      {
        id: 4,
        title: 'Upgrade to business class',
        price: 120
      }
    ]
  },
  {
    id: '14',
    type: 'train',
    date_from: '2022-05-13T09:41:32.590Z',
    date_to: '2022-05-14T09:41:24.640Z',
    destination: {
      name: 'Saint Petersburg',
      description: 'Saint Petersburg, with crowded streets, with a beautiful old town, middle-eastern paradise.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.07331069026162162',
          description: 'Saint Petersburg street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3520910477978667',
          description: 'Saint Petersburg parliament building'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.09865761230702441',
          description: 'Saint Petersburg biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.24464910425417719',
          description: 'Saint Petersburg parliament building'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3095211836167977',
          description: 'Saint Petersburg kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.26655519214835177',
          description: 'Saint Petersburg central station'
        }
      ]
    },
    base_price: 300,
    is_favorite: true,
    offers: [
      {
        id: 1,
        title: 'Book a taxi at the arrival point',
        price: 110
      },
      {
        id: 2,
        title: 'Order a breakfast',
        price: 80
      },
      {
        id: 3,
        title: 'Wake up at a certain time',
        price: 140
      }
    ]
  },
  {
    id: '15',
    type: 'restaurant',
    date_from: '2022-05-14T09:41:24.640Z',
    date_to: '2022-05-14T13:08:44.154Z',
    destination: {
      name: 'Frankfurt',
      description: 'Frankfurt, full of of cozy canteens where you can try the best coffee in the Middle East.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.38015675557392603',
          description: 'Frankfurt parliament building'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.9852656074395825',
          description: 'Frankfurt embankment'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.7533299330471595',
          description: 'Frankfurt park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.3228794911068076',
          description: 'Frankfurt biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.2203267316410582',
          description: 'Frankfurt street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.22710815114559324',
          description: 'Frankfurt zoo'
        }
      ]
    },
    base_price: 800,
    is_favorite: true,
    offers: [
      {
        id: 1,
        title: 'Choose live music',
        price: 150
      },
      {
        id: 2,
        title: 'Choose VIP area',
        price: 70
      }
    ]
  },
  {
    id: '16',
    type: 'check-in',
    date_from: '2022-05-14T13:08:44.154Z',
    date_to: '2022-05-14T21:09:57.881Z',
    destination: {
      name: 'Frankfurt',
      description: 'Frankfurt, for those who value comfort and coziness.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.14034708813903118',
          description: 'Frankfurt park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8513088927768242',
          description: 'Frankfurt central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8697295084306269',
          description: 'Frankfurt zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.9024752868104926',
          description: 'Frankfurt park'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.10045986265030749',
          description: 'Frankfurt park'
        }
      ]
    },
    base_price: 1000,
    is_favorite: false,
    offers: [
      {
        id: 2,
        title: 'Choose the time of check-out',
        price: 190
      },
      {
        id: 3,
        title: 'Add breakfast',
        price: 110
      },
      {
        id: 4,
        title: 'Laundry',
        price: 140
      },
      {
        id: 5,
        title: 'Order a meal from the restaurant',
        price: 30
      }
    ]
  },
  {
    id: '17',
    type: 'sightseeing',
    date_from: '2022-05-14T21:09:57.881Z',
    date_to: '2022-05-15T05:27:56.121Z',
    destination: {
      name: 'Paris',
      description: 'Paris, with a beautiful old town, with an embankment of a mighty river as a centre of attraction.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.15052581909780804',
          description: 'Paris parliament building'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.40977022932336316',
          description: 'Paris kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8795350352757894',
          description: 'Paris street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.49041381700574305',
          description: 'Paris city centre'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.8309662023279798',
          description: 'Paris park'
        }
      ]
    },
    base_price: 500,
    is_favorite: true,
    offers: []
  },
  {
    id: '18',
    type: 'restaurant',
    date_from: '2022-05-15T05:27:56.121Z',
    date_to: '2022-05-15T22:53:54.386Z',
    destination: {
      name: 'Munich',
      description: 'Munich, a true asian pearl, with crowded streets, in a middle of Europe, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.7155556782954651',
          description: 'Munich central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.9267218596661653',
          description: 'Munich kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.16221648592857485',
          description: 'Munich central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.4233088225456072',
          description: 'Munich biggest supermarket'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.40682030650748513',
          description: 'Munich kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.10911775069317264',
          description: 'Munich parliament building'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.20907698813031184',
          description: 'Munich central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.489665761830256',
          description: 'Munich zoo'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.27385807028531395',
          description: 'Munich city centre'
        }
      ]
    },
    base_price: 700,
    is_favorite: false,
    offers: [
      {
        id: 1,
        title: 'Choose live music',
        price: 150
      },
      {
        id: 2,
        title: 'Choose VIP area',
        price: 70
      }
    ]
  },
  {
    id: '19',
    type: 'check-in',
    date_from: '2022-05-15T22:53:54.386Z',
    date_to: '2022-05-16T16:09:01.805Z',
    destination: {
      name: 'Monaco',
      description: 'Monaco, a true asian pearl, with a beautiful old town, with an embankment of a mighty river as a centre of attraction.',
      pictures: [
        {
          src: 'http://picsum.photos/300/200?r=0.8481680460292842',
          description: 'Monaco street market'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.34309723423200333',
          description: 'Monaco city centre'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6672517197061878',
          description: 'Monaco kindergarten'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.4730105796757027',
          description: 'Monaco central station'
        },
        {
          src: 'http://picsum.photos/300/200?r=0.6693288819077772',
          description: 'Monaco city centre'
        }
      ]
    },
    base_price: 700,
    is_favorite: true,
    offers: [
      {
        id: 1,
        title: 'Choose the time of check-in',
        price: 70
      },
      {
        id: 3,
        title: 'Add breakfast',
        price: 110
      },
      {
        id: 5,
        title: 'Order a meal from the restaurant',
        price: 30
      }
    ]
  }
];

const polymorph = (obj) => {
  return {
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
  };
};

const points = mockPoints.map((obj) => {
  return polymorph(obj);
});
console.log(points)
export default class PointsModel {
  #points= Array.from({length: 14}, generatePoint);

  get points() {
   // return this.#points;
    return points;
  }
}
