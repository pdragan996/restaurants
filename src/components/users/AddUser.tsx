import React from 'react';
import { useForm } from 'react-hook-form';
import { UserBasic } from '../../shared/models/user.model';
import { addNewUser } from '../../shared/services/users.service';
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
    formState: {errors}
  } = useForm();

  const onSubmit = async () => {
    const newUser: UserBasic = {
      name: watch(USER_FORM_LABELS.name),
      email: watch(USER_FORM_LABELS.email),
      password: watch(USER_FORM_LABELS.password),
      username: watch(USER_FORM_LABELS.username),
      //TODO Add logic for admin
      isAdmin: true,
      isSuperAdmin: true
    };
    await addNewUser(newUser);
  };

  return (
    <>
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