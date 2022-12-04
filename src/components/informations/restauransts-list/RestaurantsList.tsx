import React, { useEffect, useState } from 'react';
import './RestaurantsList.scss';
import '../../../shared/SharedStyles.scss';
import Button from '../../UI/Button';
import { firebaseUrl } from '../../../shared/config';
import RestaurantItem from '../../shared/RestaurantItem';
import { IRestaurant } from '../../../shared/models/restaurant.model';

const RestaurantsList = () => {
  const [isListShown, setIsListShown] = useState(false);
  const [restaurantsList, setRestaurantsList] = useState<IRestaurant[]>([]);
  
  //TODO (Add try catch block)
  const fetchRestaurantsData = async () => {
    try {
      const response = await fetch(`${firebaseUrl}/restaurants.json`);
      const responseData = await response.json();
      const formattedData: IRestaurant[] = [];
    
      for (let restaurant in responseData) {
        formattedData.push({
          id: restaurant,
          name: responseData[restaurant].name,
          location: responseData[restaurant].location,
          description: responseData[restaurant].description,
          rating: responseData[restaurant].rating
        })
      }
    
      return formattedData;
    } catch (error) {
      console.log(error);
      return [];
      //logic for open modal here
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
    <div className="m8 flex flex--center flex--column">
      <Button name={isListShown ? 'Hide list' : 'Show list'} clickFunction={showListToggle}/>
      <div className="list-wrapper p8 w100">
        {isListShown && <ul className="flex res-list">
          {restaurantsList.map((restaurant: IRestaurant) =>
            <RestaurantItem
              key={restaurant.id}
              name={restaurant.name}
              description={restaurant.description}
              rating={restaurant.rating}
            />)}
        </ul>}
      </div>
    </div>
  )
}

export default RestaurantsList;