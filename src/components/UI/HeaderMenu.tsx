import React from 'react';
import '../../shared/SharedStyles.scss';
import './HeaderMenu.scss';
import Tabs from './Tabs';

const HeaderMenu = () => {

  //TODO Move Tabs logic here
  return (
    <div className="header-menu p8">
      <Tabs/>
    </div>
  );
};

export default HeaderMenu;