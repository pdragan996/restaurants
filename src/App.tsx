import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashboard from './components/Dashboard';
import Home from './components/home-page/Home';
import Places from './components/places/Places';
import Restaurants from './components/restaurants/Restaurants';
import Users from './components/users/Users';
import { ROUTES } from './shared/routes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DEFAULT} element={<Dashboard/>}>
          <Route index element={<Home/>}/>
          <Route path={ROUTES.RESTAURANTS} element={<Restaurants/>}/>
          <Route path={ROUTES.USERS} element={<Users/>}/>
          <Route path={ROUTES.PLACES} element={<Places/>}/>
          <Route path="*" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
