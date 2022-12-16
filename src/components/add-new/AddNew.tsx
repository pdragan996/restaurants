import React, { Fragment, MutableRefObject, useRef, useState } from 'react';
import './AddNew.scss';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';
import Button from '../UI/Button';
import { IRestaurant } from '../../shared/models/restaurant.model';
import { firebaseCollection, firebaseUrl, MESSAGES } from '../../shared/config';
import Toastr from '../shared/toastr/Toastr';

const AddNew = () => {
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [isToastrShown, setIsToastrShown] = useState(false);
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const ratingRef = useRef() as MutableRefObject<HTMLInputElement>;
  const locationRef = useRef() as MutableRefObject<HTMLInputElement>;
  const descriptionRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
  
  const hideToastr = (seconds: number = 4) => {
    setTimeout(() => {
      setIsToastrShown(false);
    }, seconds * 1000)
  }
  
  const submitRestaurantHandler = async (restaurant: IRestaurant) => {
    try {
      await fetch(`${firebaseUrl}/${firebaseCollection}`, {
        method: 'POST',
        body: JSON.stringify(restaurant)
      });
      setIsErrorOccurred(false);
      setIsToastrShown(true);
      hideToastr();
      
    } catch (error) {
      // TODO delete log after checking response from firebase
      console.log(error);
      setIsErrorOccurred(true);
      setIsToastrShown(true);
      hideToastr();
    }
  }
  
  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    
    const newRestaurant: IRestaurant = {
      id: Math.floor(Math.random() * 100000),
      name: nameRef.current.value,
      rating: +(ratingRef.current.value),
      location: locationRef.current.value,
      description: descriptionRef.current.value
    }
    
    if (!isNameValid(nameRef.current.value) || !isRatingValid(+ratingRef.current.value)) {
      // TODO (Add form validation)
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
    <Fragment>
      <div className="page">
        <h1 className="flex flex--center">Add new restaurant to list</h1>
        <form onSubmit={onSubmitHandler} className="add-new-form p16">
          <Input ref={nameRef} label="Name" type="text"/>
          <Input ref={ratingRef} label="Rating" type="number"/>
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
          message={MESSAGES.RESPONSE.SUCCESS.ADD}
          type="success"
        />
      }
      {
        isToastrShown && isErrorOccurred &&
        <Toastr
          message={'Neki Message'}
          type="error"
        />
      }
    
    </Fragment>
  )
}

const isNameValid = (name: string): boolean => {
  return !!name && name.length < 60;
}

const isRatingValid = (rating: number): boolean => {
  if (!rating) {
    return true;
  }
  return rating > 0 && rating <= 5 && Number.isInteger(rating);
}

export default AddNew;