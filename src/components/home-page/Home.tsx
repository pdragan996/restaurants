import React, { useState } from 'react';
import './Home.scss';
import { resList } from '../../shared/config';
import Button from '../UI/Button';
import RestaurantInfo from '../shared/RestaurantInfo';

const Home = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  
  const getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * (resList.length * 2));
    // Da se pojaca Pastir :D
    const listIndex = randomNum < resList.length ? randomNum : 0;
    setRandomNumber(listIndex);
    setIsGenerated(true);
  }
  
  const handleCancelChoice = () => {
    setIsGenerated(false);
  }
    
    return (
      <div className="page home-wrapper">
        <h1 className="header-title flex flex--center">Šta ćemo jesti</h1>
        <div className="flex flex--center flex--column p8  choose-restaurant">
          <Button name="Generate restaurant" clickFunction={getRandomNum}/>
          {isGenerated && <RestaurantInfo
            cancelChoice={handleCancelChoice}
            restaurant={resList[randomNumber]}
            key={resList[randomNumber].id}/>}
        </div>
        
      </div>
    )
}

export default Home;