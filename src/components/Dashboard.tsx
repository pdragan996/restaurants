import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderMenu from './shared/HeaderMenu';

const Dashboard = () => {
  return <>
    <HeaderMenu/>
    <Outlet/>
  </>;
};

export default Dashboard;