import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const MyPlace = () => {

    const toggleContentHandler = (ev) => {
        const toggleElement = ev.target.nextSibling;
        if(toggleElement.style.display === 'block'){
            toggleElement.style.display = 'none';
        } else {
            toggleElement.style.display = 'block';
        }
    }

    return (
        <div className="myplace-content-wrapper">
            <button onClick={toggleContentHandler} id="toggle-messages"><FontAwesomeIcon icon={faCaretDown} /> Messages</button>
            <div id="message-toggle" className="toggle">
                <div className="message-element">
                    <p>Date: 9-23-2022</p>
                    <p>Sender: _admin</p>
                    <p>Message: Hello User. I have seen your message. The issue is fixed</p>
                    <button className="delete-message">Delete</button>
                </div>
                <div className="message-divider"></div>
                <div className="message-element">
                    <p>Date: 9-23-2022</p>
                    <p>Sender: _admin</p>
                    <p>Message: Hello User. I have seen your message. The issue is fixed</p>
                    <button className="delete-message">Delete</button>
                </div>
                <div className="message-divider"></div>
                <div className="message-element">
                    <p>Date: 9-23-2022</p>
                    <p>Sender: _admin</p>
                    <p>Message: Hello User. I have seen your message. The issue is fixed</p>
                    <button className="delete-message">Delete</button>
                </div>
                <div className="message-divider"></div>
                <div className="message-element">
                    <p>Date: 9-23-2022</p>
                    <p>Sender: _admin</p>
                    <p>Message: Hello User. I have seen your message. The issue is fixed</p>
                    <button className="delete-message">Delete</button>
                </div>
                <div className="message-divider"></div>
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