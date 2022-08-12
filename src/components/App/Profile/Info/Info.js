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
            <div id="profile-details-toggle" className="toggle">
                <form>
                    <input className="profile-input" type="text" placeholder="Username" />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                <form>
                    <input className="profile-input" type="text" placeholder="Email" />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                <form>
                    <input className="profile-input" type="password" placeholder="Password" />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
            </div>
            <button onClick={toggleContentHandler} id="toggle-personal-info"><FontAwesomeIcon icon={faCaretDown} /> Personal Info</button>
            <div id="personal-info-toggle" className="toggle">
                <div>
                <form>
                    <input className="profile-input" type="text" placeholder="Address" />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                <form>
                    <input className="profile-input" type="text" placeholder="Telephone" />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                <form>
                    <input className="profile-input" type="date" placeholder="Birth Date" />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                </div>
            </div>
        </div>
    );
}