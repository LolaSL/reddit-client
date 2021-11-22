import React from 'react';
import Button from '../buttons/Button';
export default function Modal({ open, children, onClose }) {
    if (!open) return null
    return (
        <div>
            <Button onClick={onClose}>Close</Button>
            {children}

        </div>
    )
}

