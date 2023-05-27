import React, { useEffect, useState } from 'react';
import { MESSAGES } from '../../shared/config';
import { IRestaurant } from '../../shared/models/restaurant.model';
import { getRestaurantsData } from '../../shared/services/restaurant.service';
import Table from '../UI/Table';
import Toastr from '../UI/Toastr';

const List = () => {
  const [isErrorOccured, setIsErrorOccurred] = useState(false);
  const [isToastrShown, setIsToastrShown] = useState(false);
  const [restaurantsList, setRestaurantsList] = useState<IRestaurant[]>([]);

  const hideToastr = () => {
    setIsToastrShown(false);
  };

  const mapRestaurantsToTableDataSource = (restaurants: IRestaurant[]) => {
    return restaurants.map(restaurant =>
                             <tr key={restaurant._id}>
                               <td>{restaurant.name}</td>
                               <td>{restaurant.rating}</td>
                               <td>{restaurant.location}</td>
                               <td>{restaurant.description}</td>
                             </tr>);
  };

  const fetchRestaurantsData = async (): Promise<IRestaurant[]> => {
    try {
      const responseData = await getRestaurantsData();
      setIsErrorOccurred(false);
      return responseData;
    } catch (error) {
      setIsErrorOccurred(true);
      setIsToastrShown(true);
      return [];
    }
  };

  useEffect(() => {
    fetchRestaurantsData().then(data => {
      setRestaurantsList(data);
    });
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

export default List;