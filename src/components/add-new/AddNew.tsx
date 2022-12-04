import React, { Fragment, MutableRefObject, useRef, useState } from 'react';
import './AddNew.scss';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';
import Button from '../UI/Button';
import { IRestaurant } from '../../shared/models/restaurant.model';
import { firebaseUrl } from '../../shared/config';
import Modal from '../shared/Modal';

const AddNew = () => {
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const ratingRef = useRef() as MutableRefObject<HTMLInputElement>;
  const locationRef = useRef() as MutableRefObject<HTMLInputElement>;
  const descriptionRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
  
  const hideModalHandler = () => {
    setIsModalOpened(false);
  }
  
  const submitRestaurantHandler = async (restaurant: IRestaurant) => {
    try {
      await fetch(`${firebaseUrl}/restaurants.json`, {
        method: 'POST',
        body: JSON.stringify(restaurant)
      });
      setIsErrorOccurred(false);
      setIsModalOpened(true);
      
      setTimeout( () => {
        setIsModalOpened(false);
      } , 5000)
      
      
    } catch (error) {
      console.log(error);
      setIsErrorOccurred(true);
      setIsModalOpened(true);
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
    
    submitRestaurantHandler(newRestaurant).then( () => {
      nameRef.current.value = '';
      ratingRef.current.value = '';
      locationRef.current.value = '';
      descriptionRef.current.value = '';
    });
  }
  
  return (
    <Fragment>
      { !isErrorOccurred && !isModalOpened && <div className="page">
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
      </div>}
      { isErrorOccurred && isModalOpened &&
        <Modal onHide={hideModalHandler}>
          <h1>Error Modal</h1>
        </Modal>
      }
      { !isErrorOccurred && isModalOpened &&
        <Modal onHide={hideModalHandler}>
          <h1>Success Modal</h1>
        </Modal>
      }
    </Fragment>
  )
}

export default AddNew;