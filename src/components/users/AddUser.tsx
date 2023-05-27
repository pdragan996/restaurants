import React from 'react';
import { useForm } from 'react-hook-form';
import { addNewUser } from '../../services/users.service';
import { UserBasic } from '../../shared/models/user.model';
import Button from '../UI/Button';
import Input from '../UI/Input';

const USER_FORM_LABELS = {
  email: 'Email',
  name: 'Name',
  username: 'Username',
  password: 'Password'
};

const AddUser = () => {
  const {
    register,
    handleSubmit,
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

  const onSubmit = async () => {
    const newUser: UserBasic = {
      name: watch(USER_FORM_LABELS.name),
      email: watch(USER_FORM_LABELS.email),
      password: watch(USER_FORM_LABELS.password),
      username: watch(USER_FORM_LABELS.username),
      //TODO Add logic for admin
      isAdmin: true,
      isUserSuperAdmin: true
    };
    await addNewUser(newUser);
  };

  return (
    <>
      <h1 className="flex flex--center">Add new user</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="add-new-form p16">
        <Input label={USER_FORM_LABELS.name} type="text" register={register}/>
        <Input label={USER_FORM_LABELS.email} type="email" register={register}/>
        <Input label={USER_FORM_LABELS.username} type="text" register={register}/>
        <Input label={USER_FORM_LABELS.password} type="password" register={register}/>
        <div className="add-new-form__buttons flex flex--end">
          <Button name="Add" type="submit"/>
          <Button name="Reset" type="reset"/>
        </div>
      </form>
    </>
  );
};

export default AddUser;