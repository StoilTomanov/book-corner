import { updateMessages } from "../../../services/user-service";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const Modal = ({ hideModal, msgData }) => {
    const { authData } = useContext(AuthContext);
    const closeModalHandler = () => {
        hideModal(false);
    }

    const sendReplyHandler = (ev) => {
        ev.preventDefault();
        if(authData.isAdmin === true) {
            updateMessages('reply', authData.email, true, {from: msgData.email, topic: msgData.topic, message: ev.target.children[1].children[0].value}, msgData.email);
        } else {
            updateMessages('reply', authData.email, false, {from: msgData.email, topic: msgData.topic, message: ev.target.children[1].children[0].value}, 'admin_email');
        }
        hideModal(false);
    }

    return (
        <>
            <div className="modal-overlay" id="modal-overlay"></div>
            <div className="modal-wrapper">
                <form onSubmit={sendReplyHandler}>
                    <div className="modal-header">
                        <p>Reply to {msgData.email}</p>
                        <p>Topic: {msgData.topic}</p>
                    </div>
                    <div className="modal-body">
                        <textarea name="reply-message-area" id="reply-message-area" cols="60" rows="10"></textarea>
                    </div>
                    <div className="modal-footer">
                        <button onClick={closeModalHandler}>Cancel</button>
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </>
    );
}