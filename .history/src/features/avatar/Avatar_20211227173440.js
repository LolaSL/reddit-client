import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    const { name } = props;

    return (
        <img
            src={`https://api.adorable.io/avatars/10/${name}`}
            alt={`${name} profile`}
            className="avatar-profile-image"
            test-data="appAvatar"
        />
    );
};

export default Avatar;
