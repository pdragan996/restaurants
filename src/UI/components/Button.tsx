import React from 'react';
import { ButtonType } from '../models/button.type';
import '../styles/_shared-style.scss';
import '../styles/components/Button.scss';

interface ButtonProps {
  name: string;
  clickFunction?: () => void;
  type?: ButtonType;
  isDeleteButton?: boolean;
}

const Button = (
  {
    name,
    clickFunction,
    type,
    isDeleteButton
  }: ButtonProps) => {
  return (
    <>
      <button
        className={`btn m8 ${isDeleteButton ? 'btn--delete' : 'btn--regular'}`}
        onClick={clickFunction}
        type={type}
      >
        {name}
      </button>
    </>
  );
};

export default Button;