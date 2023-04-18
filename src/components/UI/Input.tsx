import React from 'react';
import './Input.scss';

const Input = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <div className="input flex flex--column flex--center p8">
      <label className="input__label">{props.label}</label>
      <input className="input__field p8"
             ref={ref}
             type={props.type}
             min={props.min}
             max={props.max}
             required={props.isRequired}/>
    </div>
  )
})

export default Input;

interface InputProps {
  label: string;
  type: string;
  min?: number;
  max?:number;
  isRequired?:boolean
  ref?: any;
}