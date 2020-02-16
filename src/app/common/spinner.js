import React from 'react';
import loader_cms from './../assets/loader_cms.gif';

const Spinner = ({ size = 'md' }) => {
    return (
        <div className="spinner">
            <img className={`spinner--${size}`} src={loader_cms} alt="loading" />
        </div>
    );
};

export default Spinner;