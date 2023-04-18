export interface IRestaurant {
  id: number | string;
  name: string;
  rating?: number;
  description?: string;
  location?: string;
  firebaseId: string;
}