import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../models/user.model';
import { getUsers } from '../../services/users.service';
import { USER_CONFIG } from '../../shared/config';
import { setUsersList } from '../../shared/store/slices';
import { AppState } from '../../shared/store/state-models';
import Table from '../../UI/components/Table';
import Toastr from '../../UI/components/Toastr';

const UsersList = () => {
  const [toastrMessage, setToastrMessage] = useState('');
  const usersList = useSelector((state: AppState) => state.users);
  const dispatch = useDispatch();

  const mapUsersToTableRows = (users: User[]) => {
    return users.map(
      (user: User) =>
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.isAdmin ? 'Yes' : 'No'}</td>
        </tr>);
  };

  const fetchUserData = async (): Promise<void> => {
    try {
      const responseData: User[] = await getUsers();
      dispatch(setUsersList(responseData));
    } catch (err: any) {
      setToastrMessage(err?.response?.data ?? USER_CONFIG.FETCH_FAILED);
    }
  };

  const columnNames: string[] = ['Name', 'Username', 'Email', 'Is Admin'];

  useEffect(() => {
    if (!usersList?.length) {
      fetchUserData();
    }
  }, []);

  const hideToastr = () => setToastrMessage('');

  return <>
    <Table headers={columnNames} rows={usersList} mapFunction={mapUsersToTableRows}/>
    {
      toastrMessage &&
      <Toastr
        close={hideToastr}
        closeTimeout={4}
        type="error"
        message={toastrMessage}/>
    }
  </>;
};

export default UsersList;