export interface IRestaurant extends RestaurantBasic {
  _id: string;
}

export interface RestaurantBasic {
  name: string;
  description?: string;
  location?: string;
  //TODO Move rating after testing
  rating?: number;
}