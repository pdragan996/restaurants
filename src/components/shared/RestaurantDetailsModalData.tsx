import React from 'react';
import { deleteRestaurant } from '../../services/restaurant.service';
import { IRestaurant } from '../../shared/models/restaurant.model';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import './RestaurantDetailsModalData.scss';

interface RestaurantDetailsModalDataProps {
  restaurant: IRestaurant;
  onHide: () => void;
  afterDelete: () => void;
}

const RestaurantDetailsModalData = ({restaurant, onHide, afterDelete}: RestaurantDetailsModalDataProps) => {

  const deleteButtonHandler = async () => {
    try {
      await deleteRestaurant(restaurant._id);
      afterDelete();
      onHide();
    } catch (err: any) {
      //TODO
    }
  };

  return (
    <Modal onHide={onHide}>
      <div className="flex flex--column details-modal ">
        <span>{restaurant.name}</span>
        <span>{restaurant.location}</span>
        <span>{restaurant.description}</span>
        <span>{restaurant.rating}</span>

        <Button name="Delete restaurant" isDeleteButton={true} clickFunction={deleteButtonHandler}/>
      </div>
    </Modal>
  );
};

export default RestaurantDetailsModalData;