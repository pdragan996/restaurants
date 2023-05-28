import axios from 'axios';
import { IRestaurant, RestaurantBasic } from '../models/restaurant.model';
import { serverUrl } from '../shared/config';

const url = `${serverUrl}restaurants`;

export const getRestaurantsData = async (): Promise<IRestaurant[]> => {
  return (await axios.get<IRestaurant[]>(url)).data;
};

export const saveRestaurant = async (restaurant: RestaurantBasic): Promise<void> => {
  await axios.post(url, restaurant);
};

export const deleteRestaurant = async (id: string): Promise<void> => {
  await axios.delete(`${url}/${id}`);
};
