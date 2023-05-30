import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { User, UserBasic } from '../../models/user.model';
import { addNewUser } from '../../services/users.service';
import { USER_CONFIG } from '../../shared/config';
import { AppState } from '../../shared/store/state-models';
import Checkbox from '../../UI/components/Checkbox';
import Form from '../../UI/components/Form';
import Input from '../../UI/components/Input';
import Toastr from '../../UI/components/Toastr';

const USER_FORM_LABELS = {
  email: 'Email',
  name: 'Name',
  username: 'Username',
  password: 'Password',
  isAdmin: 'Is Admin'
};

const AddUser = () => {
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [toastrMessage, setToastrMessage] = useState('');
  const loggedUser: User = useSelector((state: AppState) => state.loggedUser);
  const {
    register,
    watch,
    setValue,
    formState: {errors}
  } = useForm();

  const resetForm = () => {
    setValue(USER_FORM_LABELS.name, '');
    setValue(USER_FORM_LABELS.email, '');
    setValue(USER_FORM_LABELS.password, '');
    setValue(USER_FORM_LABELS.username, '');
  };

  const onSubmit = async (): Promise<void> => {
    try {
      const newUser: UserBasic = {
        name: watch(USER_FORM_LABELS.name),
        email: watch(USER_FORM_LABELS.email),
        password: watch(USER_FORM_LABELS.password),
        username: watch(USER_FORM_LABELS.username),
        isAdmin: watch(USER_FORM_LABELS.isAdmin),
        canCreateAdmin: false
      };
      await addNewUser(newUser);
      setIsErrorOccured(false);
      setToastrMessage(USER_CONFIG.ADDED);
      resetForm();
    } catch (error: any) {
      setIsErrorOccured(true);
      setToastrMessage(error?.response?.data || USER_CONFIG.ADD_FAILED);
    }
  };

  return <>
    <Form title={'Add new user'} onSubmit={onSubmit}>
      <Input label={USER_FORM_LABELS.name} type="text" register={register}/>
      <Input label={USER_FORM_LABELS.email} type="email" register={register}/>
      <Input label={USER_FORM_LABELS.username} type="text" register={register}/>
      <Input label={USER_FORM_LABELS.password} type="password" register={register}/>
      {
        loggedUser.canCreateAdmin &&
        <Checkbox
          register={register}
          label={USER_FORM_LABELS.isAdmin}
        />
      }
    </Form>
    {!!toastrMessage &&
      <Toastr
        type={!isErrorOccured ? 'success' : 'error'}
        message={toastrMessage}
        close={() => setToastrMessage('')}/>
    }
  </>;
};

export default AddUser;