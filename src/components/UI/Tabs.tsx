import React from 'react';
import './Tabs.scss';
import { Link } from 'react-router-dom';
import {ROUTES} from '../../shared/routes';

const Tabs = () => {
  
  return (
      <ul className="tab-list flex">
        <Link to={ROUTES.DEFAULT}>
          <div className="single-tab">Home</div>
        </Link>
        <Link to={ROUTES.ADD_NEW}>
          <div className="single-tab">Add new</div>
        </Link>
        <Link to={ROUTES.INFORMATIONS}>
          <div className="single-tab">Active restaurants</div>
        </Link>
      </ul>
  );
}

export default Tabs;