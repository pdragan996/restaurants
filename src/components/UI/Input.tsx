import React from 'react';
import './Input.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const Input = ({label, register, type, ...props}: InputProps) => {
  return (
    <div className="input flex flex--column flex--center p8">
      <label className="input__label">{label}</label>
      <input className="input__field p8"
             {...register(label)}
             type={type}
             min={props.min}
             max={props.max}
             required={props.isRequired}/>
    </div>
  )
}

export default Input;

interface InputProps {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  min?: number;
  max?: number;
  isRequired?: boolean
  ref?: any;
}