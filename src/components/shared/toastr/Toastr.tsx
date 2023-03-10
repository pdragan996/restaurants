import React from 'react';
import './Toastr.scss';

const Toastr = (props: ToastrProps) => {
  
  return (
    <div className=
           {`p16 flex flex--center toastr ${props.type === 'success' ? 'toastr--success': 'toastr--error'}`}>
      {props.message}
    </div>
  )
}

export default Toastr;

interface ToastrProps {
  type: ToastrType;
  message: string;
}

type ToastrType = 'success' | 'error';