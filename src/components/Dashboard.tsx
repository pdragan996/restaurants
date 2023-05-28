import React from 'react';
import { Outlet } from 'react-router-dom';
import '../shared/SharedStyles.scss';
import HeaderMenu from './shared/HeaderMenu';

const Dashboard = () => {
  return (
    <>
      <HeaderMenu/>
      <Outlet/>
    </>
  );
};

export default Dashboard;