import React from 'react';
import './Toastr.scss';

const Toastr = ({type, message, close, closeTimeout = 4}: ToastrProps) => {

  setTimeout(() => {
    close();
  }, closeTimeout * 1000)

  return (
    <div className=
           {`p16 flex flex--center toastr ${type === 'success' ? 'toastr--success' : 'toastr--error'}`}>
      {message}
    </div>
  )
}

export default Toastr;

interface ToastrProps {
  type: ToastrType;
  message: string;
  close: () => void;
  closeTimeout?: number;
}

type ToastrType = 'success' | 'error';