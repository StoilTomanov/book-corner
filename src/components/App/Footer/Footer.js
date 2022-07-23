import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
    const pathname = useLocation().pathname;

    return (
        <footer id={pathname === '/home' ? "hidden-footer" : "footer"}>
        <nav className="footer-nav">
            <ul>
                <li className="nav-footer-element">
                    <Link to="/about" className="nav-link">About us</Link>
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