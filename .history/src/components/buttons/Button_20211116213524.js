import React from 'react';
import './Button.css';

// eslint-disable-next-line no-undef

const Button = (props) => {
    const [primary, label] = props;
    return (<div className="primary">{primary}</div> ?
        <div className="button primary-button">{label}</div> :
        <div className="button secondary-button">{label}</div>
    )
}




export default Button;