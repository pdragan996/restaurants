import React from 'react';
import './RestaurantItem.scss';

const RestaurantItem = (props: ListItemProps) => {
  
  return (
    <li className="flex m8 list-item p8">
      <span>Name: {props.name}</span>
      <span>Rating: {props.rating}</span>
      <span>Description: {props.description}</span>
    </li>
  )
}

export default RestaurantItem;

interface ListItemProps {
  name: string;
  description?: string;
  rating?: number;
}