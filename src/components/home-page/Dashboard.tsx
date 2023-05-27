import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../shared/SharedStyles.scss';
import HeaderMenu from '../UI/HeaderMenu';
import './Dashboard.scss';

const Dashboard = () => {
  // logic for header menu here
  return (
    <>
      <HeaderMenu/>
      <Outlet/>
    </>
  );
};

export default Dashboard;