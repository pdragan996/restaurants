import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import './Textarea.scss';

const Textarea = ({label, register, ...rest}: TextareaProps) => {
  return (
    <div className="textarea p8">
      <label className="textarea__label">{label}</label>
      <textarea
        className="textarea__field p8"
        {...register(label)}
        {...rest}>
      </textarea>
    </div>
  );
};

export default Textarea;

interface TextareaProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  value?: string;
  max?: number;
  min?: number;
  placeholder?: string;
}