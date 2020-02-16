import React from 'react';
import ReactDOM from 'react-dom';
import './_modal.scss';

const modalRoot = document.getElementById('modal-root')

const Modal = (props) => {

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__content">
                {props.children}
                <button onClick={props.closeModal} className="btn-primary btn-full">X</button>
            </div>
        </div>,
        modalRoot
    )
}

export default Modal;