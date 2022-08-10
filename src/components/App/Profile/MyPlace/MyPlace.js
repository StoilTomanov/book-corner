import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { getCurrentUser } from "../../../../services/user-service";

export const MyPlace = () => {
    const {authData} = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(()=>{
        getCurrentUser(authData.accessToken, authData._id)
        .then(data => {
            setUser(user => user = data);
            // when fetching user data it receives the hashed password as well. REMOVE THAT!
        });
    }, [authData._id, authData.accessToken]);
    
    console.log(user)

    const toggleContentHandler = (ev) => {
        const toggleElement = ev.target.nextSibling;
        if(toggleElement.style.display === 'block'){
            toggleElement.style.display = 'none';
        } else {
            toggleElement.style.display = 'block';
        }
    }

    //TODO: add the date
    return (
        <div className="myplace-content-wrapper">
            <button onClick={toggleContentHandler} id="toggle-messages"><FontAwesomeIcon icon={faCaretDown} /> Messages</button>
            <div id="message-toggle" className="toggle">
                {user.messages !== undefined ? user.messages.map((msg, index) => {
                    return(
                        <div key={msg.sentMsg._id}>
                            <div className="message-element">
                                <p>Date: {msg.sentMsg.data}</p>
                                <p>Sender: {msg.sentMsg.from}</p>
                                <p>Topic: {msg.sentMsg.topic}</p>
                                <p>Message: {msg.sentMsg.message}</p>
                                <button className="reply-message">Reply</button>
                                <button className="delete-message">Delete</button>
                            </div>
                            <div className="message-divider"></div>
                        </div>
                    );
                }) : null}                
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
        </div>
    );
}