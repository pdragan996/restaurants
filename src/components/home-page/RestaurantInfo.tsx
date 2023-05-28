import React, { useState } from 'react';
import { Restaurant } from '../../models/restaurant.model';
import { MESSAGES } from '../../shared/config';
import '../../styles/RestaurantInfo.scss';
import Toastr from '../../UI/components/Toastr';

const RestaurantInfo = ({restaurant, cancelChoice}: ListItemProps) => {
  const [isToastrOpened, setIsToastrOpened] = useState(false);

  return (
    <>
      <div className="res-info-wrapper">
        <div className="cancel-choice flex flex--center"
             onClick={cancelChoice}
        >X
        </div>
        <li className={`flex m8 restaurant-item p8`}>
          <span>Name: {restaurant.name}</span>
          <span>Rating: {restaurant.rating}</span>
          <span>Description: {restaurant.description}</span>
          <span>Location: {restaurant.location}</span>
        </li>
      </div>
      {isToastrOpened &&
        <Toastr
          type="success"
          message={MESSAGES.RESPONSE.SUCCESS.DELETE}
          close={() => setIsToastrOpened(false)}/>}
    </>
  );
};

export default RestaurantInfo;

interface ListItemProps {
  restaurant: Restaurant;
  cancelChoice: () => void;
}