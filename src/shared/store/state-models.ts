import { Restaurant } from '../../models/restaurant.model';
import { User } from '../../models/user.model';

export interface AppState {
  users: User[],
  restaurants: Restaurant[],
  loggedUser: User;
}