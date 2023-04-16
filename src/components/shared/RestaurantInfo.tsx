import React from 'react';
import './RestaurantInfo.scss';
import RestaurantItem from './RestaurantItem';
import { IRestaurant } from '../../shared/models/restaurant.model';

const RestaurantInfo = ({restaurant, cancelChoice, key}: RestaurantInfoProps) => {
  return (
    <div className="res-info-wrapper">
      {cancelChoice && <div className="cancel-choice flex flex--center"
            onClick={cancelChoice}
      >X</div>}
      <RestaurantItem
        restaurant={restaurant}
      />
    </div>
  )
}

export default RestaurantInfo;

interface RestaurantInfoProps {
  restaurant: IRestaurant;
  key: number | string;
  cancelChoice?: () => void;
}