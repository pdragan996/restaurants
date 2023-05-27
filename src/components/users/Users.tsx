import React, { useState } from 'react';
import Button from '../UI/Button';
import AddUser from './AddUser';
import UsersList from './UsersList';

const Users = () => {
  const [addFormShown, setAddFormShown] = useState(false);

  const showFormToggle = () => {
    setAddFormShown(!addFormShown);
  };

  return <div className="page">
    <div className="m8 flex flex--center flex--column">
      <Button name={addFormShown ? 'Hide form' : 'Add new user'} clickFunction={showFormToggle}/>
      {addFormShown && <AddUser/>}
    </div>
    <UsersList/>
  </div>;
};

export default Users;