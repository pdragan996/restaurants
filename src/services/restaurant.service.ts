import axios from 'axios';
import { serverUrl } from '../shared/config';
import { IRestaurant, RestaurantBasic } from '../shared/models/restaurant.model';

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
