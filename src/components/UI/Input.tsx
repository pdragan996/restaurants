import React from 'react';
import './Input.scss';

const Input = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <div className="input flex flex--column flex--center p8">
      <label className="input__label">{props.label}</label>
      <input ref={ref} type={props.type} className="input__field p8"/>
    </div>
  )
})

export default Input;

interface InputProps {
  label: string;
  type: string;
  ref?: any;
}