import React, { useState } from 'react';
import './RestaurantItem.scss';
import RestaurantDetailsModalData from '../informations/RestaurantDetailsModalData';
import { IRestaurant } from '../../shared/models/restaurant.model';
import Toastr from './toastr/Toastr';
import {MESSAGES} from '../../shared/config';

const RestaurantItem = ({restaurant, isViewOnly}: ListItemProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isToastrOpened, setIsToastrOpened] = useState(false)

  const closeModal = () => {
    setIsModalOpened(false);
  }
  
  const openModal = () => {
    if (!isViewOnly) {
      setIsModalOpened(true);
    }
  }

  const handleDelete = () => {
    setIsToastrOpened(true)
  }
  
  return (
    <>
      <li className={`flex m8 list-item p8 ${!isViewOnly ? 'list-item--clickable': ''}`} onClick={openModal}>
        <span>Name: {restaurant.name}</span>
        <span>Rating: {restaurant.rating}</span>
        <span>Description: {restaurant.description}</span>
        <span>Location: {restaurant.location}</span>
      </li>
      {isModalOpened && <RestaurantDetailsModalData
        onHide={closeModal}
        afterDelete={handleDelete}
        restaurant={restaurant}/>}
      {isToastrOpened &&
        <Toastr
          type="success"
          message={MESSAGES.RESPONSE.SUCCESS.DELETE}
          close={() => setIsToastrOpened(false)} />}
    </>
  )
}

export default RestaurantItem;

interface ListItemProps {
  restaurant: IRestaurant;
  isViewOnly: boolean;
  key: string | number;
}