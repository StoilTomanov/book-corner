import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { getCurrentUser, updateMessages } from "../../../../services/user-service";
import { Modal } from "../../Modal/Modal";

export const MyPlace = () => {
    const {authData} = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [reply, setReply] = useState({
        email: '',
        topic: '',
        message: '',
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        getCurrentUser(authData.accessToken, authData._id)
        .then(data => {
            setUser(user => user = data);
        });
    }, [authData._id, authData.accessToken]);
    
    const toggleContentHandler = (ev) => {
        const toggleElement = ev.target.nextSibling;
        if(toggleElement.style.display === 'block'){
            toggleElement.style.display = 'none';
        } else {
            toggleElement.style.display = 'block';
        }
    }

    const deleteMessageHandler = (ev) => {
        updateMessages('delete', authData.email, authData.isAdmin, {message_id: ev.target.dataset.id}, null);
    };
    
    const replyMessageHandler = (ev) => {
        setShowModal(true);
        setReply({
            email: ev.target.parentElement.children[1].textContent.split(': ')[1],
            topic: ev.target.parentElement.children[2].textContent.split(': ')[1],
        })
    };

    return (
        <div className="myplace-content-wrapper">
            <button onClick={toggleContentHandler} id="toggle-messages"><FontAwesomeIcon icon={faCaretDown} /> Messages</button>
            <div id="message-toggle" className="toggle">
            {(user.messages !== undefined && user.messages?.length !== 0) ? user.messages.map((msg) => {
                return(
                    <div key={msg.sentMsg._id}>
                        <div className="message-element">
                            <p className="msg-paragraph">Date: {msg.sentMsg.date}</p>
                            <p className="msg-paragraph">Sender: {msg.sentMsg.from}</p>
                            <p className="msg-paragraph">Topic: {msg.sentMsg.topic}</p>
                            <p className="msg-paragraph">Message: {msg.sentMsg.message}</p>
                            <button data-id={msg.sentMsg._id} className="reply-message" onClick={replyMessageHandler}>Reply</button>
                            <button data-id={msg.sentMsg._id} className="delete-message" onClick={deleteMessageHandler}>Delete</button>
                        </div>
                        <div className="message-divider"></div>
                    </div>
                );
            }) : <h3>There no new messages</h3>}
            </div>
            <button onClick={toggleContentHandler} id="toggle-book-list"><FontAwesomeIcon icon={faCaretDown} /> Bought books</button>
            <div id="book-list-toggle" className="toggle">
                <div>
                    <ol>
                        <li>asdsd</li>
                        <li>asdsd</li>
                        <li>asdsd</li>
                        <li>asdsd</li>
                    </ol>
                </div>
            </div>
            {showModal && <Modal msgData={reply} hideModal={setShowModal} />}
        </div>
    );
}