import React, {useEffect, useState} from 'react';
import './Home.scss';
import Button from '../UI/Button';
import RestaurantInfo from '../shared/RestaurantInfo';
import {getRestaurantsData} from '../../shared/services/restaurant.service';
import {IRestaurant} from '../../shared/models/restaurant.model';

const Home = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [restaurantsList, setRestaurantsList] = useState<IRestaurant[]>([]);

  const fetchRestaurantsData = async () => {
    try {
      const responseData = await getRestaurantsData();
      setIsErrorOccurred(false);
      return responseData;
    } catch (error) {
      //TODO Add error handling
      setIsErrorOccurred(true);
      return [];
    }
  }

  useEffect( ()=> {
    fetchRestaurantsData().then(list => setRestaurantsList(list)).catch(err => {
      setIsErrorOccurred(true)
      // TODO Add some global error handler
    });
  },[])

  const getRandomNum = () => {
    // Da se pojaca Pastir :D
    const randomNum = Math.floor(Math.random() * (restaurantsList.length * 2));
    const pastirIndex = restaurantsList.findIndex(item => +item.id === 0) ?? 0;
    const listIndex = randomNum < restaurantsList.length ? randomNum : pastirIndex;

    // const listIndex = Math.floor(Math.random() * restaurantsList.length);
    setRandomNumber(listIndex);
    setIsGenerated(true);
  }
  
  const handleCancelChoice = () => {
    setIsGenerated(false);
  }
    
    return (
      <div className="page home-wrapper">
        <h1 className="header-title flex flex--center">Select random restaurant from Banja Luka</h1>
        <div className="flex flex--center flex--column p8  choose-restaurant">
          <Button name="Generate restaurant" clickFunction={getRandomNum}/>
          {isGenerated && !isErrorOccurred && <RestaurantInfo
            cancelChoice={handleCancelChoice}
            restaurant={restaurantsList[randomNumber]}/>}
        </div>
        
      </div>
    )
}

export default Home;