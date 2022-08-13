import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { deleteMessage, getUserMessages } from "../../../../services/message-service";
import { Modal } from "../../Modal/Modal";
import { getCurrentUser } from "../../../../services/user-service";

export const MyPlace = () => {
    const {authData} = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    const [books, setBooks] = useState([]);
    const [reply, setReply] = useState({
        email: '',
        topic: '',
        message: '',
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        getUserMessages(authData._id, authData.accessToken)
            .then(data => {
                setMessages(messages => messages = data);
            });
        getCurrentUser(authData.accessToken, authData._id)
            .then(data => {
                setBooks(data);
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
        deleteMessage(authData.email, ev.target.dataset.id, authData.accessToken)
            .then(data => {
                setMessages(messages => messages = data);
            })
    };
    
    const replyMessageHandler = (ev) => {
        setShowModal(true);
        setReply({
            msgId: ev.target.dataset.id,
            email: ev.target.parentElement.children[1].textContent.split(': ')[1],
            topic: ev.target.parentElement.children[2].textContent.split(': ')[1],
        })
    };

    return (
        <div className="myplace-content-wrapper">
            <button onClick={toggleContentHandler} id="toggle-messages"><FontAwesomeIcon icon={faCaretDown} /> Messages</button>
            <div id="message-toggle" className="toggle">
            {(messages !== undefined && messages?.length !== 0) ? messages.map((msg) => {
                return(
                    <div key={msg._id}>
                        <div className="message-element">
                            <p className="msg-paragraph">Date: {msg.date}</p>
                            <p className="msg-paragraph">Sender: {msg.from}</p>
                            <p className="msg-paragraph">Topic: {msg.topic}</p>
                            <p className="msg-paragraph">Message: {msg.message}</p>
                            <button data-id={msg._id} className="reply-message" onClick={replyMessageHandler}>Reply</button>
                            <button data-id={msg._id} className="delete-message" onClick={deleteMessageHandler}>Delete</button>
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
                        {books.books !== undefined ? books.books.map((book, index) => {
                            return <li key={index}>{book}</li>
                        }) : <h4>There are no bought books</h4>}
                    </ol>
                </div>
            </div>
            {showModal && <Modal msgData={reply} hideModal={setShowModal} updateMessages={setMessages} />}
        </div>
    );
}