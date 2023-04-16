import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Backdrop =({onHide}: any) => {
  return <div className="backdrop" onClick={onHide} />
};

const ModalOverlay = ({children}: any) => {
  return(
    <div className="modal">
      <div className="">{children}</div>
    </div>
  );
}

const overlays = document.getElementById('overlays')!;

const Modal = ({onHide, children}: any) => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onHide={onHide} />, overlays)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlays)}
  </Fragment>
}

export default Modal;