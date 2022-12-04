import React from 'react';
import './RestaurantInfo.scss';
import RestaurantItem from './RestaurantItem';
import { IRestaurant } from '../../shared/models/restaurant.model';

interface RestaurantInfoProps {
  restaurant: IRestaurant;
  key: number | string;
  cancelChoice?: () => void;
}

const RestaurantInfo = (props: RestaurantInfoProps) => {
  return (
    <div className="res-info-wrapper">
      <div className="cancel-choice flex flex--center"
           onClick={props.cancelChoice}
      >X</div>
      <RestaurantItem
        name={props.restaurant.name}
        description={props.restaurant.description}
        rating={props.restaurant.rating}
      />
    </div>
  )
}

export default RestaurantInfo;