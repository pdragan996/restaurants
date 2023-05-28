import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../models/user.model';
import { getUsers } from '../../services/users.service';
import { MESSAGES } from '../../shared/config';
import { setUsersList } from '../../shared/store/slices';
import { AppState } from '../../shared/store/state-models';
import Table from '../../UI/components/Table';
import Toastr from '../../UI/components/Toastr';

const UsersList = () => {
  const [isErrorOccured, setIsErrorOccurred] = useState(false);
  const [isToastrShown, setIsToastrShown] = useState(false);
  const usersList = useSelector((state: AppState) => state.users);
  const dispatch = useDispatch();

  const mapUsersToTableRows = (users: User[]) => {
    return users.map(user => <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.isAdmin ? 'Yes' : 'No'}</td>
    </tr>);
  };

  const fetchUserData = async (): Promise<User[]> => {
    try {
      const responseData: User[] = await getUsers();
      dispatch(setUsersList(responseData));
      setIsErrorOccurred(false);
      return responseData;
    } catch (err) {
      setIsErrorOccurred(true);
      setIsToastrShown(true);
      return [];
    }
  };

  const columnNames: string[] = ['Name', 'Username', 'Email', 'Is Admin'];

  useEffect(() => {
    if (!usersList?.length) {
      fetchUserData();
    }
  }, []);

  const hideToastr = () => setIsToastrShown(false);

  return (
    <>
      <Table headers={columnNames} rows={usersList} mapFunction={mapUsersToTableRows}/>
      {
        isToastrShown &&
        <Toastr
          close={hideToastr}
          closeTimeout={4}
          type="error"
          message={MESSAGES.RESPONSE.ERROR}/>
      }
    </>
  );
};

export default UsersList;