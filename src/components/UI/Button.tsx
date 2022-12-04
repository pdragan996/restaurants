import React from 'react';
import './Button.scss'
import '../../shared/SharedStyles.scss'
import { ButtonType } from '../../shared/types/button.type';

interface ButtonProps {
  name: string;
  clickFunction?: () => void;
  type?: ButtonType;
}

const Button = (props: ButtonProps) => {
  return (
    <React.Fragment>
      <button
        className="btn m8"
        onClick={props.clickFunction}
        type={props.type}
      >
        {props.name}
      </button>
    </React.Fragment>
  )
}

export default Button;