import { firebaseCollection, firebaseCollectionName, firebaseUrl } from '../config';
import axios from 'axios';
import { IRestaurant } from '../models/restaurant.model';

const url = `${firebaseUrl}/${firebaseCollection}`;

export const getRestaurantsData = async (): Promise<IRestaurant[]> => {
  const responseData = (await axios.get(url)).data
  return mapFirebaseResponseToArray(responseData);
}

const mapFirebaseResponseToArray = (responseData: any): IRestaurant[] => {
  let formattedData: IRestaurant[] = [];
  for (let restaurant in responseData) {
    formattedData.push({
      id: restaurant,
      name: responseData[restaurant].name,
      location: responseData[restaurant].location,
      description: responseData[restaurant].description,
      rating: responseData[restaurant].rating
    })
  }
  return formattedData;
}

export const saveRestaurant = async (restaurant: IRestaurant): Promise<void> => {
  await axios.post(url, restaurant)
}

export const deleteRestaurant = async (id: string): Promise<void> => {
  await axios.delete(`${firebaseUrl}/${firebaseCollectionName}/${id}.json`);
}
