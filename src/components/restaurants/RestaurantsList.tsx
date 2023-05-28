import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from '../../models/restaurant.model';
import { getRestaurantsData } from '../../services/restaurant.service';
import { MESSAGES } from '../../shared/config';
import { setRestaurantsList } from '../../shared/store/slices';
import { AppState } from '../../shared/store/state-models';
import Table from '../../UI/components/Table';
import Toastr from '../../UI/components/Toastr';

const RestaurantsList = () => {
  const [isErrorOccured, setIsErrorOccurred] = useState(false);
  const [isToastrShown, setIsToastrShown] = useState(false);
  const restaurantsList = useSelector((state: AppState) => state.restaurants);
  const dispatch = useDispatch();

  const hideToastr = () => {
    setIsToastrShown(false);
  };

  const mapRestaurantsToTableDataSource = (restaurants: Restaurant[]) => {
    return restaurants.map(restaurant =>
                             <tr key={restaurant._id}>
                               <td>{restaurant.name}</td>
                               <td>{restaurant.rating}</td>
                               <td>{restaurant.location}</td>
                               <td>{restaurant.description}</td>
                             </tr>);
  };

  const fetchRestaurantsData = async (): Promise<Restaurant[]> => {
    try {
      const responseData = await getRestaurantsData();
      dispatch(setRestaurantsList(responseData));
      setIsErrorOccurred(false);
      return responseData;
    } catch (error) {
      setIsErrorOccurred(true);
      setIsToastrShown(true);
      return [];
    }
  };

  useEffect(() => {
    if (!restaurantsList?.length) {
      fetchRestaurantsData();
    }
  }, []);

  const columnNames = ['Name', 'Rating', 'Location', 'Description'];


  return <>
    <Table headers={columnNames} rows={restaurantsList} mapFunction={mapRestaurantsToTableDataSource}/>
    {
      isToastrShown &&
      <Toastr
        close={hideToastr}
        closeTimeout={4}
        type="error"
        message={MESSAGES.RESPONSE.ERROR}/>
    }
  </>;
};

export default RestaurantsList;