import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../styles/_shared-style.scss';
import '../styles/components/Modal.scss';

interface ModalProps {
  children: any;
  onHide: () => void;
}

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

const Modal = ({onHide, children}: ModalProps) => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onHide={onHide}/>, overlays)}
    {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, overlays)}
  </Fragment>;
};

export default Modal;