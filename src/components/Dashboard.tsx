import React from 'react';
import './Dashboard.scss';
import '../shared/SharedStyles.scss';
import HeaderMenu from './UI/HeaderMenu';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  
  return (
    <React.Fragment>
      <HeaderMenu />
      <Outlet />
    </React.Fragment>
  )
}

export default Dashboard;