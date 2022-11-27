import React, { useState } from 'react';
import './RestaurantsList.scss';
import '../../../shared/SharedStyles.scss';
import Button from '../../UI/Button';
import { resList } from '../../../shared/config';
import RestaurantItem from '../../shared/RestaurantItem';
import { IRestaurant } from '../../../shared/models/restaurant.model';

const RestaurantsList = () => {
  const [isListShown, setIsListShown] = useState(false);
  
  const showList = () => {
    setIsListShown(!isListShown);
  }
  
  return (
    <div className="m8 flex flex--center flex--column">
      <Button name={isListShown ? 'Hide list' : 'Show list'} clickFunction={showList}/>
      <div className="list-wrapper p8 w100">
        {isListShown && <ul className="flex res-list">
          {resList.map((restaurant: IRestaurant) =>
            <RestaurantItem
              key={restaurant.id}
              name={restaurant.name}
              description={restaurant.description}
              rating={restaurant.rating}
            />) }
        </ul>}
      </div>
    </div>
  )
}

export default RestaurantsList;