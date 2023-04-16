import React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home-page/Home';
import AddNew from './components/add-new/AddNew';
import RestaurantsList from './components/informations/RestaurantsList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route index element={<Home/>}/>
          <Route path="add-new" element={<AddNew/>}/>
          <Route path="informations" element={<RestaurantsList/>}/>
          <Route path="*" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
