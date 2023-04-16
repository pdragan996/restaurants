import React, { useState } from 'react';
import './RestaurantItem.scss';
import RestaurantDetailsModalData from '../informations/RestaurantDetailsModalData';
import { IRestaurant } from '../../shared/models/restaurant.model';

const RestaurantItem = ({restaurant}: ListItemProps) => {
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
        <span>Name: {restaurant.name}</span>
        <span>Rating: {restaurant.rating}</span>
        <span>Description: {restaurant.description}</span>
      </li>
      {isModalOpened && <RestaurantDetailsModalData
        onHide={closeModal}
        restaurant={restaurant}/>}
    </>
  )
}

export default RestaurantItem;

interface ListItemProps {
  restaurant: IRestaurant
}