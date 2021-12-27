import React from 'react';
import './Card.css';

const Card = (props) => {
    return <div className={`card ${props.className}`} data-test="appCard" >{props.children}</div>;
};

export default Card;