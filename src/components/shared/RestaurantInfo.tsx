import React from 'react';
import './RestaurantInfo.scss';
import RestaurantItem from './RestaurantItem';
import { IRestaurant } from '../../shared/models/restaurant.model';

const RestaurantInfo = ({restaurant, cancelChoice}: RestaurantInfoProps) => {
  return (
    <div className="res-info-wrapper">
      <div className="cancel-choice flex flex--center"
            onClick={cancelChoice}
      >X</div>
      <RestaurantItem
        key={restaurant._id}
        restaurant={restaurant}
        isViewOnly={true}
      />
    </div>
  )
}

export default RestaurantInfo;

interface RestaurantInfoProps {
  restaurant: IRestaurant;
  cancelChoice: () => void;
}