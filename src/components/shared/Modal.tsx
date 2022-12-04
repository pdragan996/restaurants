import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Backdrop =(props: any) => {
  return <div className="backdrop" onClick={props.onHide} />
};

const ModalOverlay = (props: any) => {
  return(
    <div className="modal">
      <div className="">{props.children}</div>
    </div>
  );
}

const overlays = document.getElementById('overlays')!;

const Modal = (props: any) => {
  return <Fragment>
    {ReactDOM.createPortal(<Backdrop onHide={props.onHide} />, overlays)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays)}
  </Fragment>
}

export default Modal;