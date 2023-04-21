import React, { Fragment, MutableRefObject, useRef, useState } from 'react';
import './AddNew.scss';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';
import Button from '../UI/Button';
import { IRestaurant } from '../../shared/models/restaurant.model';
import { MESSAGES } from '../../shared/config';
import Toastr from '../shared/toastr/Toastr';
import { saveRestaurant } from '../../shared/services/restaurant.service';

const AddNew = () => {
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [isToastrShown, setIsToastrShown] = useState(false);

  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const ratingRef = useRef() as MutableRefObject<HTMLInputElement>;
  const locationRef = useRef() as MutableRefObject<HTMLInputElement>;
  const descriptionRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const removeToastr = () => {
    setIsToastrShown(false);
  }
  
  const submitRestaurantHandler = async (restaurant: IRestaurant) => {
    try {
      await saveRestaurant(restaurant)
      setIsErrorOccurred(false);
      setIsToastrShown(true);
      
    } catch (error) {
      // TODO Check errors from firebase
      setIsErrorOccurred(true);
      setIsToastrShown(true);
    }
  }
  
  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    
    const newRestaurant: IRestaurant = {
      id: Math.floor(Math.random() * 100000),
      firebaseId: '',
      name: nameRef.current.value,
      rating: +(ratingRef.current.value),
      location: locationRef.current.value,
      description: descriptionRef.current.value
    }
    
    if (!isNameValid(nameRef.current.value) || !isRatingValid(+ratingRef.current.value)) {
      // TODO (Add form validation)
      setIsToastrShown(true);
      setIsErrorOccurred(true);
      return;
    }
    
    submitRestaurantHandler(newRestaurant).then(() => {
      nameRef.current.value = '';
      ratingRef.current.value = '';
      locationRef.current.value = '';
      descriptionRef.current.value = '';
    });
  }
  
  return (
    <>
      <div className="page">
        <h1 className="flex flex--center">Add new restaurant to list</h1>
        <form onSubmit={onSubmitHandler} className="add-new-form p16">
          <Input ref={nameRef} label="Name" type="text" isRequired={true}/>
          <Input ref={ratingRef} label="Rating" type="number" max={5} min={1}/>
          <Input ref={locationRef} label="Location" type="text"/>
          <Textarea ref={descriptionRef} label="Description"/>
          <div className="add-new-form__buttons flex flex--end">
            <Button name="Add" type="submit"/>
            <Button name="Reset" type="reset"/>
          </div>
        </form>
      </div>
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
  )
}

const isNameValid = (name: string): boolean => {
  return !!name && name.length < 60;
}

const isRatingValid = (rating: number): boolean => {
  if (!rating) {
    return true;
  }
  return Number.isInteger(rating) && rating > 0 && rating <= 5;
}

export default AddNew;