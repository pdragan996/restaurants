import { serverUrl } from '../config';
import axios from 'axios';
import { IRestaurant } from '../models/restaurant.model';

const url = `${serverUrl}restaurants`;

export const getRestaurantsData = async (): Promise<IRestaurant[]> => {
  return (await axios.get<IRestaurant[]>(url)).data;
}

export const saveRestaurant = async (restaurant: IRestaurant): Promise<void> => {
  await axios.post(url, restaurant)
}

export const deleteRestaurant = async (id: string): Promise<void> => {
  await axios.delete(`${url}/${id}`);
}
