import React, { useState } from 'react';
import { ROUTES } from '../../shared/routes';
import '../../styles/HeaderMenu.scss';
import Button from '../../UI/components/Button';
import Modal from '../../UI/components/Modal';
import TabGroup from '../../UI/components/TabGroup';
import { Tab } from '../../UI/models/tab.model';
import '../../UI/styles/_shared-style.scss';
import LoginModalData from './LoginModalData';

const HeaderMenu = () => {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);

  const closeModal = () => setIsLoginModalOpened(false);
  const openModal = () => setIsLoginModalOpened(true);

  const tabList: Tab[] = [
    {
      link: ROUTES.DEFAULT,
      name: 'Home'
    },
    {
      link: ROUTES.RESTAURANTS,
      name: 'Restaurants'
    },
    {
      link: ROUTES.USERS,
      name: 'Users'
    },
    {
      link: ROUTES.PLACES,
      name: 'Places'
    }
  ];

  return (
    <header className="header-menu flex flex--between p8">
      <TabGroup tabs={tabList}/>
      <div className="login-button flex flex--end">
        <Button name={'Login'} type={'button'} clickFunction={openModal}/>
      </div>
      {isLoginModalOpened &&
        <Modal onHide={closeModal}>
          <LoginModalData/>
        </Modal>}
    </header>
  );
};

export default HeaderMenu;