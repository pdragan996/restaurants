import React, { useEffect, useState } from 'react';
import { User } from '../../models/user.model';
import { getUsers } from '../../services/users.service';
import { MESSAGES } from '../../shared/config';
import Table from '../../UI/components/Table';
import Toastr from '../../UI/components/Toastr';

const UsersList = () => {
  const [isErrorOccured, setIsErrorOccurred] = useState(false);
  const [isToastrShown, setIsToastrShown] = useState(false);
  const [usersList, setUsersList] = useState<User[]>([]);

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
    fetchUserData().then(users => setUsersList(users));
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