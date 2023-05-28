import React from 'react';
import { ROUTES } from '../../shared/routes';
import '../../shared/SharedStyles.scss';
import { Tab } from '../../UI/models/tab.model';
import TabGroup from '../../UI/TabGroup';
import './HeaderMenu.scss';

const HeaderMenu = () => {
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
    <div className="header-menu p8">
      <TabGroup tabs={tabList}/>
    </div>
  );
};

export default HeaderMenu;