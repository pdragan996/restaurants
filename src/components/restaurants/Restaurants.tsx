import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../models/user.model';
import { AppState } from '../../shared/store/state-models';
import Button from '../../UI/components/Button';
import AddRestaurant from './AddRestaurant';
import RestaurantsList from './RestaurantsList';

const Restaurants = () => {
  const [addFormShown, setAddFormShown] = useState(false);
  const loggedUser: User = useSelector((state: AppState) => state.loggedUser);


  const showFormToggle = () => {
    setAddFormShown(!addFormShown);
  };

  return <div className="page">
    {loggedUser &&
      <div className="m8 flex flex--center flex--column">
        <Button
          name={addFormShown ? 'Hide form' : 'Add new restaurant'}
          clickFunction={showFormToggle}/>
        {addFormShown &&
          <AddRestaurant/>
        }
      </div>}
    <RestaurantsList/>
  </div>;
};

export default Restaurants;