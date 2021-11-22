import React from 'react';
import './Login.css';
import Button from "../buttons/Button";
import PersonIcon from '@material-ui/icons/Person';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Modal } from 'react-modal';



const Login = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="login">
            <Button label={"Log In"} />
            <Button primary label={"Sign Up"} />
            <div className="profile" label={"Profile"} onClick={openModal}>
                <PersonIcon className="hoverable" />
                <ArrowDropDownIcon className="hoverable" />
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
        </div>
    )
}

export default Login;