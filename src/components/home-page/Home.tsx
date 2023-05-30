import React, { useState } from 'react';
import { fetchRandomRestaurant } from '../../services/restaurant.service';
import { RESTAURANTS_CONFIG } from '../../shared/config';
import '../../styles/Home.scss';
import Button from '../../UI/components/Button';
import Toastr from '../../UI/components/Toastr';
import RestaurantInfo from './RestaurantInfo';

const Home = () => {
  const [randomRestaurant, setRandomRestaurant] = useState(null);
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [toastrMessage, setToastrMessage] = useState('');

  const getRandomRestaurant = async () => {
    try {
      const response = await fetchRandomRestaurant();
      setRandomRestaurant(response);
      setIsErrorOccurred(false);
    } catch (error: any) {
      setIsErrorOccurred(true);
      setToastrMessage(error?.response?.data || RESTAURANTS_CONFIG.FETCH_FAILED);
    }
  };

  const handleCancelChoice = () => {
    setRandomRestaurant(null);
  };

  return <>
    <div className="page home-wrapper">
      <h1 className="header-title flex flex--center">Select random restaurant from Banja Luka</h1>
      <div className="flex flex--center flex--column p8  choose-restaurant">
        <Button name="Generate restaurant" clickFunction={getRandomRestaurant}/>
        {randomRestaurant && !isErrorOccurred &&
          <RestaurantInfo
            cancelChoice={handleCancelChoice}
            restaurant={randomRestaurant}/>}
      </div>
    </div>
    {
      toastrMessage && isErrorOccurred &&
      <Toastr
        type={'error'}
        message={toastrMessage}
        close={() => setToastrMessage('')}/>
    }
  </>;
};

export default Home;