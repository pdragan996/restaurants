import React, { useState } from 'react';
import Button from '../../UI/components/Button';
import AddRestaurant from './AddRestaurant';
import RestaurantsList from './RestaurantsList';

const Restaurants = () => {
  const [addFormShown, setAddFormShown] = useState(false);

  const showFormToggle = () => {
    setAddFormShown(!addFormShown);
  };

  return <div className="page">
    <div className="m8 flex flex--center flex--column">
      <Button name={addFormShown ? 'Hide form' : 'Add new restaurant'} clickFunction={showFormToggle}/>
      {addFormShown && <AddRestaurant/>}
    </div>
    <RestaurantsList/>
  </div>;
};

export default Restaurants;