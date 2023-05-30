import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Credentials } from '../../models/credentials.model';
import { login } from '../../services/users.service';
import { LOGIN_MESSAGES } from '../../shared/config';
import { setLoggedUser } from '../../shared/store/slices';
import Form from '../../UI/components/Form';
import Input from '../../UI/components/Input';
import Toastr from '../../UI/components/Toastr';

interface LoginModalDataProps {
  onSuccessLogin: () => void;
}

const LOGIN_FORM_LABELS = {
  email: 'Email',
  password: 'Password'
};

const LoginModalData = ({onSuccessLogin}: LoginModalDataProps) => {
  const [toastrMessage, setToastrMessage] = useState('');
  const [isErrorOccurred, setIsErrorOccurred] = useState(false);
  const {
    register,
    watch,
    formState: {errors}
  } = useForm();
  const dispatch = useDispatch();

  const submitForm = async (): Promise<void> => {
    try {
      const userCredentials: Credentials = {
        email: watch(LOGIN_FORM_LABELS.email),
        password: watch(LOGIN_FORM_LABELS.password)
      };

      const user = await login(userCredentials);

      dispatch(setLoggedUser(user));
      onSuccessLogin();
      setIsErrorOccurred(false);
      setToastrMessage(LOGIN_MESSAGES.SUCCESS);
    } catch (error: any) {
      setIsErrorOccurred(true);
      setToastrMessage(error?.response?.data ?? LOGIN_MESSAGES.FAILED);
    }
  };

  return <>
    <Form title={'Login'} onSubmit={submitForm}>
      <Input label={LOGIN_FORM_LABELS.email} type={'email'} register={register}/>
      <Input label={LOGIN_FORM_LABELS.password} type={'password'} register={register}/>
    </Form>
    {toastrMessage &&
      <Toastr
        type={isErrorOccurred ? 'error' : 'success'}
        message={toastrMessage}
        closeTimeout={3}
        close={() => setToastrMessage('')}/>
    }
  </>;
};

export default LoginModalData;