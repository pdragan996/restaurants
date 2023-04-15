import { firebaseCollection, firebaseCollectionName, firebaseUrl } from '../config';
import axios from 'axios';
import { IRestaurant } from '../models/restaurant.model';

const url = `${firebaseUrl}/${firebaseCollection}`;


export const getRestaurantsData = async (): Promise<any> => {
  const responseData = (await axios.get(url)).data
  return mapFirebaseResponseToArray(responseData);
}

//make interface for firebase data
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

export const saveRestaurant = async (restaurant: IRestaurant) => {
  await axios.post(url, restaurant)
}

export const deleteRestaurant = async (id: string) => {
  await axios.delete(`${firebaseUrl}/${firebaseCollectionName}/${id}.json`);
}
