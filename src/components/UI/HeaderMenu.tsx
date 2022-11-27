import React from 'react';
import './HeaderMenu.scss';
import '../../shared/SharedStyles.scss';
import Tabs from './Tabs';

const HeaderMenu = () => {
  
  return (
    <div className="header-menu p8">
      <Tabs/>
    </div>
  );
}

export default HeaderMenu;