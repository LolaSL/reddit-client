import React from 'react';
import Button from '../buttons/Button';


export default function Modal({ open, children, onClose, primary }) {
    if (!open) return null
    return (
        <div className="modal">

            {children}
            <Button id="btn" label={"Close"} primary={primary} onClick={onClose}>Close</Button>
        </div>
    )
}


