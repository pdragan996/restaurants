import React from 'react';
import './Button.scss'
import '../../shared/SharedStyles.scss'

interface ButtonProps {
  name: string;
  clickFunction: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <React.Fragment>
      <button className="btn m8" onClick={props.clickFunction}>
        {props.name}
      </button>
    </React.Fragment>
  )
}

export default Button;