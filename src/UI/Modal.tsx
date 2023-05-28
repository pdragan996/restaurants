import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import './styles/shared-style.scss';

const Backdrop = ({onHide}: any) => {
  return <div className="backdrop" onClick={onHide}/>;
};

const ModalOverlay = ({children}: any) => {
  return (
    <div className="modal">
      {children}
    </div>
  );
};

const overlays = document.getElementById('overlays')!;

const Modal = ({onHide, children}: any) => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onHide={onHide}/>, overlays)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlays)}
  </Fragment>;
};

export default Modal;