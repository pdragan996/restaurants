import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Credentials } from '../../models/credentials.model';
import { login } from '../../services/users.service';
import { setLoggedUser } from '../../shared/store/slices';
import Form from '../../UI/components/Form';
import Input from '../../UI/components/Input';

const LOGIN_FORM_LABELS = {
  email: 'Email',
  password: 'Password'
};

const LoginModalData = () => {
  const {
    register,
    watch,
    formState: {errors}
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO Add logic for refetch
    console.log('aaa');
  }, []);

  const submitForm = async () => {
    try {
      const userCredentials: Credentials = {
        email: watch(LOGIN_FORM_LABELS.email),
        password: watch(LOGIN_FORM_LABELS.password)
      };

      const user = await login(userCredentials);

      if (user) {
        dispatch(setLoggedUser(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <>
    <Form title={'Login'} onSubmit={submitForm}>
      <Input label={LOGIN_FORM_LABELS.email} type={'email'} register={register}/>
      <Input label={LOGIN_FORM_LABELS.password} type={'password'} register={register}/>
    </Form>
  </>;
};

export default LoginModalData;