import React from 'react';
import './RestaurantInfo.scss';
import RestaurantItem from './RestaurantItem';
import { IRestaurant } from '../../shared/models/restaurant.model';

const RestaurantInfo = (props: RestaurantInfoProps) => {
  return (
    <div className="res-info-wrapper">
      {props.cancelChoice && <div className="cancel-choice flex flex--center"
            onClick={props.cancelChoice}
      >X</div>}
      <RestaurantItem
        name={props.restaurant.name}
        description={props.restaurant.description}
        rating={props.restaurant.rating}
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