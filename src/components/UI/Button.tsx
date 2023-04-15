import React from 'react';
import './Button.scss'
import '../../shared/SharedStyles.scss'
import { ButtonType } from '../../shared/types/button.type';

interface ButtonProps {
  name: string;
  clickFunction?: () => void;
  type?: ButtonType;
  isDeleteButton?: boolean;
}

const Button = ({name, clickFunction, type, isDeleteButton}: ButtonProps) => {
  return (
    <React.Fragment>
      <button
        className={`btn m8 ${isDeleteButton ? 'btn--delete' : 'btn--regular'}`}
        onClick={clickFunction}
        type={type}
      >
        {name}
      </button>
    </React.Fragment>
  )
}

export default Button;