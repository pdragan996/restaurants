import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/routes';
import './Tabs.scss';

const Tabs = () => {

  return (
    <ul className="tab-list flex">
      <Link to={ROUTES.DEFAULT}>
        <div className="single-tab">Home</div>
      </Link>
      {/*<Link to={ROUTES.ADD_NEW}>*/}
      {/*  <div className="single-tab">Add restaurant</div>*/}
      {/*</Link>*/}
      <Link to={ROUTES.RESTAURANTS}>
        <div className="single-tab">Restaurants</div>
      </Link>
      <Link to={ROUTES.USERS}>
        <div className="single-tab">Users</div>
      </Link>
      <Link to={ROUTES.PLACES}>
        <div className="single-tab">Places</div>
      </Link>
    </ul>
  );
};

export default Tabs;