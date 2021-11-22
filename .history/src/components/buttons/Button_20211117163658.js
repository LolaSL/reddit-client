import PropTypes from "prop-types";
import React from 'react';
import './Button.css';


export default function Button({ primary, label }) {

    if (primary === true) {
        return <div className="primary">{label}</div>
    }
    else { <div className="button secondary-button">{label}</div> }

}



Button.propTypes = {
    label: PropTypes.string,
    primary: PropTypes.string,
}
