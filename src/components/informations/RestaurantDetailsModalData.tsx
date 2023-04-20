import React from 'react';
import Modal from '../shared/Modal';
import './RestaurantDetailsModalData.scss';
import {IRestaurant} from '../../shared/models/restaurant.model';
import Button from '../UI/Button';
import {deleteRestaurant} from '../../shared/services/restaurant.service';

interface RestaurantDetailsModalDataProps {
  restaurant: IRestaurant;
  onHide: () => void;
  afterDelete: () => void
}

const RestaurantDetailsModalData = ({restaurant, onHide, afterDelete}: RestaurantDetailsModalDataProps) => {

  const deleteButtonHandler = async () => {
    try {
      await deleteRestaurant(restaurant.firebaseId.toString());
      afterDelete();
      onHide();
    } catch(err: any) {
      //TODO
    }
  }

return (
  <Modal onHide={onHide}>
    <div className="flex flex--column details-modal ">
      <span>{restaurant.name}</span>
      <span>{restaurant.location}</span>

      <Button name="Delete restaurant" isDeleteButton={true} clickFunction={deleteButtonHandler}/>
    </div>
  </Modal>
)
}

export default RestaurantDetailsModalData