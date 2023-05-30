import axios from 'axios';
import { Restaurant, RestaurantBasic } from '../models/restaurant.model';
import { serverUrl } from '../shared/config';

const url = `${serverUrl}restaurants`;

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  return (await axios.get<Restaurant[]>(url)).data;
};

export const saveRestaurant = async (restaurant: RestaurantBasic): Promise<void> => {
  await axios.post(url, restaurant);
};

export const fetchRandomRestaurant = async () => {
  const randomRestaurant = await axios.get(`${url}/random`);
  return randomRestaurant.data;
};

export const deleteRestaurant = async (id: string): Promise<void> => {
  await axios.delete(`${url}/${id}`);
};
