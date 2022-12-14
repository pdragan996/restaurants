import { IRestaurant } from './models/restaurant.model';

export const firebaseUrl = 'https://restaurants-6ec0c-default-rtdb.firebaseio.com';

export const firebaseCollection = 'restaurants.json';

export const resList: IRestaurant[] = [
  {
    id: 1,
    name: 'Pastirska kuća',
    rating: 5,
    description: 'najbolje'
  },
  {
    id: 2,
    name: 'Leskovački',
    rating: 4,
    description: 'fina prica'
  },
  {
    id: 3,
    name: 'Šestica',
    rating: 4,
    description: 'dobro, al malo'
  },
  {
    id: 4,
    name: 'Cream',
    rating: 3,
    description: ''
  },
  {
    id: 6,
    name: 'Staro Bure',
    rating: 5,
    description: 'vrlo dobro'
  },
  {
    id: 7,
    name: 'Marcello',
    rating: 1,
    description: 'nikad docekati'
  },
  {
    id: 8,
    name: 'Kort',
    rating: 2,
    description: 'blizu'
  },
  {
    id: 9,
    name: 'Impero Romano',
    rating: 4,
    description: 'doro, al daleko'
  }
]

export const MESSAGES = {
  RESPONSE: {
    SUCCESS: {
      ADD: 'Item is successfully added to list',
      UPDATE: 'Item is successfully updated',
      DELETE: 'Item is successfully deleted from list',
    },
    ERROR: 'An error has occurred. Check dev tools and try later',
  }
  
}