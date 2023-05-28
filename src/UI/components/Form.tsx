import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/Form.scss';
import Button from './Button';

interface FormProps {
  title: string;
  children: any;
  onSubmit: () => void;
}

const Form = ({title, children, onSubmit}: FormProps) => {
  const {handleSubmit} = useForm();

  return <>
    <h1 className="flex flex--center">{title}</h1>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form p16">
      {children}
      <div className="form__buttons flex flex--end">
        <Button name="Submit" type="submit"/>
        <Button name="Reset" type="reset"/>
      </div>
    </form>
  </>;
};

export default Form;