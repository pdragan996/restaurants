import React from 'react';
import { useForm } from 'react-hook-form';
import { UserBasic } from '../../models/user.model';
import { addNewUser } from '../../services/users.service';
import Form from '../../UI/components/Form';
import Input from '../../UI/components/Input';

const USER_FORM_LABELS = {
  email: 'Email',
  name: 'Name',
  username: 'Username',
  password: 'Password'
};

const AddUser = () => {
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

  const onSubmit = async () => {
    const newUser: UserBasic = {
      name: watch(USER_FORM_LABELS.name),
      email: watch(USER_FORM_LABELS.email),
      password: watch(USER_FORM_LABELS.password),
      username: watch(USER_FORM_LABELS.username),
      //TODO Add logic for admin
      isAdmin: true,
      canCreateAdmin: true
    };
    await addNewUser(newUser);
    resetForm();
  };

  return (
    <Form title={'Add new user'} onSubmit={onSubmit}>
      <Input label={USER_FORM_LABELS.name} type="text" register={register}/>
      <Input label={USER_FORM_LABELS.email} type="email" register={register}/>
      <Input label={USER_FORM_LABELS.username} type="text" register={register}/>
      <Input label={USER_FORM_LABELS.password} type="password" register={register}/>
    </Form>
  );
};

export default AddUser;