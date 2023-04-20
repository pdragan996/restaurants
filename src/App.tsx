import React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home-page/Home';
import AddNew from './components/add-new/AddNew';
import RestaurantsList from './components/informations/RestaurantsList';
import {ROUTES} from './shared/routes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.DEFAULT} element={<Dashboard/>}>
          <Route index element={<Home/>}/>
          <Route path={ROUTES.ADD_NEW} element={<AddNew/>}/>
          <Route path={ROUTES.INFORMATIONS} element={<RestaurantsList/>}/>
          <Route path="*" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
