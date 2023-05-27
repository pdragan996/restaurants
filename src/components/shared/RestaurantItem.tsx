import React, { useState } from 'react';
import { MESSAGES } from '../../shared/config';
import { IRestaurant } from '../../shared/models/restaurant.model';
import RestaurantDetailsModalData from '../informations/RestaurantDetailsModalData';
import Toastr from '../UI/Toastr';
import './RestaurantItem.scss';

const RestaurantItem = ({restaurant, isViewOnly, refetchData}: ListItemProps) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isToastrOpened, setIsToastrOpened] = useState(false);

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const openModal = () => {
    if (!isViewOnly) {
      setIsModalOpened(true);
    }
  };

  const handleDelete = () => {
    setIsToastrOpened(true);
    if (refetchData) {
      refetchData();
    }
  };

  return (
    <>
      <li className={`flex m8 list-item p8 ${!isViewOnly ? 'list-item--clickable' : ''}`} onClick={openModal}>
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
          close={() => setIsToastrOpened(false)}/>}
    </>
  );
};

export default RestaurantItem;

interface ListItemProps {
  restaurant: IRestaurant;
  isViewOnly: boolean;
  key: string | number;
  refetchData?: () => void;
}