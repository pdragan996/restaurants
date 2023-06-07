import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../../models/user.model';
import { LOGIN_MESSAGES } from '../../shared/config';
import { ROUTES } from '../../shared/routes';
import { setLoggedUser } from '../../shared/store/slices';
import { AppState } from '../../shared/store/state-models';
import '../../styles/HeaderMenu.scss';
import Button from '../../UI/components/Button';
import Modal from '../../UI/components/Modal';
import TabGroup from '../../UI/components/TabGroup';
import Toastr from '../../UI/components/Toastr';
import { Tab } from '../../UI/models/tab.model';
import '../../UI/styles/_shared-style.scss';
import LoginModalData from './LoginModalData';

const HeaderMenu = () => {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [toastrMessage, setToastrMessage] = useState('');
  const loggedUser: User = useSelector((state: AppState) => state.loggedUser);
  const dispatch = useDispatch();

  const closeModal = () => setIsLoginModalOpened(false);

  const openModal = () => setIsLoginModalOpened(true);

  const signOut = () => {
    dispatch(setLoggedUser(null));
    setToastrMessage(LOGIN_MESSAGES.SIGNED_OUT);
  };

  const tabList: Tab[] = [
    {
      link: ROUTES.DEFAULT,
      name: 'Home',
      isActive: true,
      tabId: 0
    },
    {
      link: ROUTES.RESTAURANTS,
      name: 'Restaurants',
      isActive: false,
      tabId: 1
    },
    {
      link: ROUTES.USERS,
      name: 'Users',
      isActive: false,
      tabId: 2
    },
    {
      link: ROUTES.PLACES,
      name: 'Places',
      isActive: false,
      tabId: 3
    }
  ];

  return (
    <header className="header-menu flex flex--between p8">
      <TabGroup tabs={tabList}/>
      {!loggedUser &&
        <div className="login-button flex flex--end">
          <Button name={'Login'} type={'button'} clickFunction={openModal}/>
        </div>
      }
      {loggedUser &&
        <div className="login-button flex flex--end">
          <Button name={'Sign out'} type={'button'} clickFunction={signOut}/>
        </div>
      }
      {
        toastrMessage &&
        <Toastr
          type={'success'}
          message={toastrMessage}
          closeTimeout={1}
          close={() => setToastrMessage('')}/>
      }
      {isLoginModalOpened &&
        <Modal onHide={closeModal}>
          <LoginModalData onSuccessLogin={closeModal}/>
        </Modal>
      }
    </header>
  );
};

export default HeaderMenu;