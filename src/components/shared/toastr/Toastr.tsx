import React from 'react';
import './Toastr.scss';

const Toastr = ({type, message}: ToastrProps) => {
  
  return (
    <div className=
           {`p16 flex flex--center toastr ${type === 'success' ? 'toastr--success': 'toastr--error'}`}>
      {message}
    </div>
  )
}

export default Toastr;

interface ToastrProps {
  type: ToastrType;
  message: string;
}

type ToastrType = 'success' | 'error';