import React, { useState } from 'react';

const Alert = ({ type = 'success', title, message, close = true }) => {
    const [visible, closeAlert] = useState(true);

    const closeAlertView = () => {
        closeAlert(false);
    };

    return (
        <div className={`alert alert-${type} ${visible ? 'alert-visible' : ''} ${close ? 'alert-dismiss' : ''}`}>
            <div className="alert__message-wrapper">
                {title && <strong>{title}</strong>}
                {message && <div className="alert__message-wrapper--message">{message}</div>}
            </div>
            {close && <i className="fa fa-close" onClick={closeAlertView}></i>}
        </div>
    );
};

export default Alert;