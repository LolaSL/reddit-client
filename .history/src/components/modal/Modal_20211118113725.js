import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('.profile');

export default function ModalMenu() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <h2 >Vew Options</h2>
                <button onClick={closeModal}>close</button>
                <div>More</div>
                <form>
                    <input />
                    <button>Github</button>
                    <button>Reddit</button>
                </form>
            </Modal>
        </div>
    );
}