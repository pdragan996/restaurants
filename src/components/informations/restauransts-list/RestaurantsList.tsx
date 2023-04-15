import React, { Fragment, useEffect, useState } from 'react';
import './RestaurantsList.scss';
import '../../../shared/SharedStyles.scss';
import Button from '../../UI/Button';
import { MESSAGES } from '../../../shared/config';
import RestaurantItem from '../../shared/RestaurantItem';
import { IRestaurant } from '../../../shared/models/restaurant.model';
import Toastr from '../../shared/toastr/Toastr';
import { getRestaurantsData } from '../../../shared/services/restaurant.service';

const RestaurantsList = () => {
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [isToastrShown, setIsToastrShown] = useState(false);
  const [isListShown, setIsListShown] = useState(true);
  const [restaurantsList, setRestaurantsList] = useState<IRestaurant[]>([]);
  
  const hideToastr = (seconds: number = 4) => {
    setTimeout(() => {
      setIsToastrShown(false);
    }, seconds * 1000)
  }
  
  const fetchRestaurantsData = async () => {
    try {
      const responseData = await getRestaurantsData();
      setIsErrorOccurred(false);
      return responseData;
    } catch (error) {
      //TODO Check messages from firebase
      setIsErrorOccurred(true);
      setIsToastrShown(true);
      hideToastr();
      return [];
    }
  }
  
  useEffect(() => {
    fetchRestaurantsData().then(data => {
      setRestaurantsList(data);
    });
  }, [])
  
  const showListToggle = () => {
    setIsListShown(!isListShown);
  }
  
  return (
    <Fragment>
      <div className="m8 flex flex--center flex--column">
        <Button name={isListShown ? 'Hide list' : 'Show list'} clickFunction={showListToggle}/>
        <div className="list-wrapper flex p8 w100">
          {isListShown && <ul className="flex res-list p0">
            {restaurantsList.map((restaurant: IRestaurant) =>
              <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
              />
            )}
          </ul>}
        </div>
      </div>
      {
        isErrorOccurred && isToastrShown && <Toastr type="error" message={MESSAGES.RESPONSE.ERROR}/>
      }
    </Fragment>
  
  )
}

export default RestaurantsList;