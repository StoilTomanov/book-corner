import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const Info = () => {

    const toggleContentHandler = (ev) => {
        const toggleElement = ev.target.nextSibling;
        if(toggleElement.style.display === 'block'){
            toggleElement.style.display = 'none';
        } else {
            toggleElement.style.display = 'block';
        }
    }

    return (
        <div className="info-content-wrapper">
            <button onClick={toggleContentHandler} id="toggle-profile-details"><FontAwesomeIcon icon={faCaretDown} /> Profile details</button>
            <div className="toggle">
                <ol>
                    <li>asdsd</li>
                    <li>asdsd</li>
                    <li>asdsd</li>
                    <li>asdsd</li>
                </ol>
            </div>
            <button onClick={toggleContentHandler} id="toggle-personal-info"><FontAwesomeIcon icon={faCaretDown} /> Personal Info</button>
            <div className="toggle">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora, obcaecati non quod ut nesciunt quis quo ullam voluptatem? Consectetur soluta, earum beatae excepturi laboriosam qui voluptatem molestiae enim fugit!</div>
            </div>
        </div>
    );
}