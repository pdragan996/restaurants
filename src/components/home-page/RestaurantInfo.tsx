import React from 'react';
import { Restaurant } from '../../models/restaurant.model';
import '../../styles/RestaurantInfo.scss';

interface ListItemProps {
  restaurant: Restaurant;
  cancelChoice: () => void;
}

const RestaurantInfo = ({restaurant, cancelChoice}: ListItemProps) => {

  return (
    <div className="res-info-wrapper">
      <div className="cancel-choice flex flex--center"
           onClick={cancelChoice}
      >X
      </div>
      <li className={`flex m8 restaurant-item p8`}>
        <span>Name: {restaurant.name}</span>
        <span>Rating: {restaurant.rating}</span>
        <span>Description: {restaurant.description}</span>
        <span>Location: {restaurant.location}</span>
      </li>
    </div>
  );
};

export default RestaurantInfo;