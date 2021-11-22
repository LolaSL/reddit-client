import PropTypes from "prop-types";
import React from 'react';
import './Button.css';


export default function Button({ primary, label, secondary }) {

    if (primary) {
        return <div className="button primary-button">{label}</div>;
    } else if (secondary) {
        return <div className="button secondary-button">{label}</div>;
    }
}




Button.propTypes = {
    label: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
}
