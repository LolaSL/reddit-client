import React from 'react';
import './Card.css';

const Card = (props) => {
    return <div className={`card ${props.className}`} test-data="appCard" >{props.children}</div>;
};

export default Card;