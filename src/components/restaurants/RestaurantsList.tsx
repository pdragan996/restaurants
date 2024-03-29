import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from '../../models/restaurant.model';
import { fetchRestaurants } from '../../services/restaurant.service';
import { RESTAURANTS_CONFIG } from '../../shared/config';
import { setRestaurantsList } from '../../shared/store/slices';
import { AppState } from '../../shared/store/state-models';
import Table from '../../UI/components/Table';
import Toastr from '../../UI/components/Toastr';

const RestaurantsList = () => {
  const [toastrMessage, setToastrMessage] = useState('');
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const restaurantsList = useSelector((state: AppState) => state.restaurants);
  const dispatch = useDispatch();

  const mapRestaurantsToTableDataSource =
    (restaurants: Restaurant[]): JSX.Element[] => {
      return restaurants.map(
        restaurant =>
          <tr key={restaurant._id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.rating}</td>
            <td>{restaurant.location}</td>
            <td>{restaurant.description}</td>
          </tr>);
    };

  const fetchRestaurantsData = async (): Promise<void> => {
    try {
      const responseData = await fetchRestaurants();
      dispatch(setRestaurantsList(responseData));
      setIsErrorOccurred(false);
    } catch (error: any) {
      setIsErrorOccurred(true);
      setToastrMessage(error?.response?.data ?? RESTAURANTS_CONFIG.FETCH_FAILED);
    }
  };

  useEffect(() => {
    if (!restaurantsList?.length) {
      fetchRestaurantsData();
    }
  }, []);

  const columnNames = ['Name', 'Rating', 'Location', 'Description'];

  return <>
    <Table
      headers={columnNames}
      rows={restaurantsList}
      mapFunction={mapRestaurantsToTableDataSource}/>
    {
      toastrMessage && isErrorOccurred &&
      <Toastr
        close={() => setToastrMessage('')}
        closeTimeout={3}
        type={'error'}
        message={toastrMessage}/>
    }
  </>;
};

export default RestaurantsList;