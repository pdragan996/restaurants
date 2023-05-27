import React, { useState } from 'react';
import AddNew from '../add-new/AddNew';
import Button from '../UI/Button';
import List from './List';

const Restaurants = () => {
  const [addFormShown, setAddFormShown] = useState(false);

  const showFormToggle = () => {
    setAddFormShown(!addFormShown);
  };

  return <div className="page">
    <div className="m8 flex flex--center flex--column">
      <Button name={addFormShown ? 'Hide form' : 'Add new restaurant'} clickFunction={showFormToggle}/>
      {addFormShown && <AddNew/>}
    </div>
    <List/>
  </div>;
};

export default Restaurants;