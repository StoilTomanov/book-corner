import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { deleteMessage, getUserMessages, sendMessage } from "../../../services/message-service";

export const Modal = ({ hideModal, msgData, updateMessages }) => {
    const { authData } = useContext(AuthContext);
    const closeModalHandler = () => {
        hideModal(false);
    }

    const sendReplyHandler = (ev) => {
        ev.preventDefault();
        const replyMsg = {
            from: authData.email,
            topic: msgData.topic,
            message: ev.target.children[1].children[0].value,
            isAdmin: authData.isAdmin
        }
        sendMessage(
            replyMsg, 
            authData.email,
            msgData.email
        );
        deleteMessage(authData.email, ev.target.dataset.id, authData.accessToken)
            .then(data => {
                updateMessages(data);
                hideModal(false);
            });
    }

    return (
        <>
            <div className="modal-overlay" id="modal-overlay"></div>
            <div className="modal-wrapper">
                <form data-id={msgData.msgId} onSubmit={sendReplyHandler}>
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