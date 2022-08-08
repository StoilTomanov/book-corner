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
            <div className="toggle">
                <ol>
                    <li>asdsd</li>
                    <li>asdsd</li>
                    <li>asdsd</li>
                    <li>asdsd</li>
                </ol>
            </div>
            <button onClick={toggleContentHandler} id="toggle-book-list"><FontAwesomeIcon icon={faCaretDown} /> Bought books</button>
            <div className="toggle">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora, obcaecati non quod ut nesciunt quis quo ullam voluptatem? Consectetur soluta, earum beatae excepturi laboriosam qui voluptatem molestiae enim fugit!</div>
            </div>
        </div>
    );
}