import React from 'react';
import './Tabs.scss';
import { Link } from 'react-router-dom';

const Tabs = () => {
  
  return (
      <ul className="tab-list flex">
        <Link to={'/'}>
          <div className="single-tab">Home</div>
        </Link>
        <Link to={'/add-new'}>
          <div className="single-tab">Add new</div>
        </Link>
        <Link to={'/informations'}>
          <div className="single-tab">Active restaurants</div>
        </Link>
      </ul>
  );
}

export default Tabs;