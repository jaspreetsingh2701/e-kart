import React from 'react';

const Tab = ({ id, isActive, onClick, customOnClick, children }) => {
    return (
        <div
            className="tab"
            style={{
                color: isActive ? '#3498db' : '',
                borderBottom: `2px solid ${isActive ? '#3498db' : '#c2c2c2'}`
            }}
            id={id} onClick={(e) => {
                onClick(e);
                customOnClick()
            }}>
            {children}
        </div>
    )
}

export default Tab;