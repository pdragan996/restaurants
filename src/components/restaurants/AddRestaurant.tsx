import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RestaurantBasic } from '../../models/restaurant.model';
import { saveRestaurant } from '../../services/restaurant.service';
import { RESTAURANTS_CONFIG } from '../../shared/config';
import Form from '../../UI/components/Form';
import Input from '../../UI/components/Input';
import Textarea from '../../UI/components/Textarea';
import Toastr from '../../UI/components/Toastr';

const ADD_RESTAURANT_LABELS = {
  name: 'Name',
  rating: 'Rating',
  location: 'Location',
  description: 'Description'
};

const AddRestaurant = () => {
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [toastrMessage, setToastrMessage] = useState('');
  const {
    register,
    watch,
    setValue,
    formState: {errors}
  } = useForm();

  const resetForm = () => {
    setValue(ADD_RESTAURANT_LABELS.name, '');
    setValue(ADD_RESTAURANT_LABELS.rating, '');
    setValue(ADD_RESTAURANT_LABELS.location, '');
    setValue(ADD_RESTAURANT_LABELS.description, '');
  };

  const onSubmit = async () => {
    try {
      const restaurant: RestaurantBasic = {
        name: watch(ADD_RESTAURANT_LABELS.name),
        rating: watch(ADD_RESTAURANT_LABELS.rating),
        location: watch(ADD_RESTAURANT_LABELS.location),
        description: watch(ADD_RESTAURANT_LABELS.description)
      };

      await saveRestaurant(restaurant);
      resetForm();

      setIsErrorOccurred(false);
      setToastrMessage(RESTAURANTS_CONFIG.ADD_SUCCESS);
    } catch (error: any) {
      setIsErrorOccurred(true);
      setToastrMessage(error?.response?.data || RESTAURANTS_CONFIG.ADD_FAILED);
    }
  };

  return <>
    <Form
      title={'Add new restaurant'}
      onSubmit={onSubmit}>
      <Input
        register={register}
        label={ADD_RESTAURANT_LABELS.name}
        type="text"/>
      <Input
        register={register}
        label={ADD_RESTAURANT_LABELS.rating}
        max={10}
        min={0}
        type="number"/>
      <Input
        register={register}
        label={ADD_RESTAURANT_LABELS.location}
        type="text"/>
      <Textarea
        label={ADD_RESTAURANT_LABELS.description}
        register={register}
        placeholder="Add description"
        max={150}
      />
    </Form>
    {
      toastrMessage &&
      <Toastr
        close={() => setToastrMessage('')}
        closeTimeout={3}
        message={toastrMessage}
        type={isErrorOccurred ? 'error' : 'success'}
      />
    }
  </>;
};
//
// const isNameValid = (name: string): boolean => {
//   return !!name && name.length < 60;
// };
//
// const isRatingValid = (rating: number): boolean => {
//   if (!rating) {
//     return true;
//   }
//   return Number.isInteger(rating) && rating > 0 && rating <= 5;
// };

export default AddRestaurant;