import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './Input.scss';

const Input = ({label, register, type, ...rest}: InputProps) => {
  return (
    <div className="input flex flex--column flex--center p8">
      <label className="input__label">{label}</label>
      <input className="input__field p8"
             {...register(label)}
             {...rest}
             type={type}/>
    </div>
  );
};

export default Input;

interface InputProps {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  min?: number;
  max?: number;
  isRequired?: boolean;
  placeholder?: string;
}