import React from 'react'

const Alert = (props) => {
    return <div className={`alert ${props.variant}`} {...props} />;
};

export default Alert;