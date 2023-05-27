import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MESSAGES } from '../../shared/config';
import { RestaurantBasic } from '../../shared/models/restaurant.model';
import { saveRestaurant } from '../../shared/services/restaurant.service';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';
import Toastr from '../UI/Toastr';
import './AddRestaurant.scss';

const ADD_RESTAURANT_LABELS = {
  name: 'Name',
  rating: 'Rating',
  location: 'Location',
  description: 'Description'
};

const AddRestaurant = () => {
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [isToastrShown, setIsToastrShown] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: {errors}
  } = useForm();

  const removeToastr = () => {
    setIsToastrShown(false);
  };

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
      setIsToastrShown(false);

    } catch (error) {
      // TODO Check errors from firebase
      setIsErrorOccurred(true);
      setIsToastrShown(true);
    }
  };

  return (
    <>
      <h1 className="flex flex--center">Add new restaurant to list</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="add-new-form p16">
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

        <div className="add-new-form__buttons flex flex--end">
          <Button name="Add" type="submit"/>
          <Button name="Reset" type="reset"/>
        </div>
      </form>
      {
        isToastrShown && !isErrorOccurred &&
        <Toastr
          close={removeToastr}
          closeTimeout={3}
          message={MESSAGES.RESPONSE.SUCCESS.ADD}
          type="success"
        />
      }
      {
        isToastrShown && isErrorOccurred &&
        <Toastr
          close={removeToastr}
          closeTimeout={4}
          message={'Form is not valid'}
          type="error"
        />
      }
    </>
  );
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