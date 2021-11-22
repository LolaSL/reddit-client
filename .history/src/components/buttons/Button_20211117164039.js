import PropTypes from "prop-types";
import React from 'react';
import './Button.css';


export default function Button({ primary, label }) {

    if (primary) {
        return <div className="button primary-button">{label}</div>
    }
    else { <div className="button secondary-button">{label}</div> }

}



Button.propTypes = {
    label: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
}
