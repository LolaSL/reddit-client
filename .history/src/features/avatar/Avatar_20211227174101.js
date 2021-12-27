import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    const { name } = props;

    return (
        <div test-data="appAvatar">
            <img
                src={`https://api.adorable.io/avatars/10/${name}`}
                alt={`${name} profile`}
                className="avatar-profile-image"

            /></div>
    );
};

export default Avatar;
