import React, { useState } from 'react';
import './RestaurantItem.scss';
import RestaurantDetailsModalData from '../informations/restauransts-list/RestaurantDetailsModalData';
import { IRestaurant } from '../../shared/models/restaurant.model';

const RestaurantItem = (props: ListItemProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  
  const closeModal = () => {
    setIsModalOpened(false);
  }
  
  const openModal = () => {
    setIsModalOpened(true);
  }
  
  return (
    <>
      <li className="flex m8 list-item p8" onClick={openModal}>
        <span>Name: {props.restaurant.name}</span>
        <span>Rating: {props.restaurant.rating}</span>
        <span>Description: {props.restaurant.description}</span>
      </li>
      {isModalOpened && <RestaurantDetailsModalData
        onHide={closeModal}
        restaurant={props.restaurant}/>}
    </>
  )
}

export default RestaurantItem;

interface ListItemProps {
  // name: string;
  // description?: string;
  // rating?: number;
  // //TODO (Make an interface)
  // menu?: any;
  restaurant: IRestaurant
}