import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer id="footer">
        <nav className="footer-nav">
            <ul>
                <li className="nav-footer-element">
                    <Link to="/about" className="nav-link">About us</Link>
                </li>
                <li className="nav-footer-element">
                    <Link to="tac" className="nav-link">Terms and Conditions</Link>
                </li>
                <li className="nav-footer-element">
                    <Link to="privacy" className="nav-link">Privacy Policy</Link>
                </li>
                <li className="nav-footer-element">
                    <Link to="delivery" className="nav-link">Delivery</Link>
                </li>
                <li className="nav-footer-element">
                    <Link to="contacts" className="nav-link">Contacts</Link>
                </li>
                <li className="nav-footer-element">
                    <Link to="faq" className="nav-link">FAQ</Link>
                </li>
            </ul>
        </nav>
    </footer>
    );
}