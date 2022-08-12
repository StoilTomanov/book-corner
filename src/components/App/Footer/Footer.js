import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

export const Footer = () => {
    const pathname = useLocation().pathname;
    const { authData } = useContext(AuthContext);

    return (
        <footer id={pathname === '/home' ? "hidden-footer" : "footer"}>
        <nav className="footer-nav">
            <ul>
                <li className="nav-footer-element">
                    <Link to="/about" className="nav-link">About us</Link>
                </li>
                <li className="nav-footer-element">
                    <Link to="/privacy" className="nav-link">Privacy Policy</Link>
                </li>
                <li className="nav-footer-element">
                    <Link to="/delivery" className="nav-link">Delivery</Link>
                </li>
                <li className="nav-footer-element">
                    <Link to="/careers" className="nav-link">Careers</Link>
                </li>
                {(authData.isAdmin === false || !authData.accessToken) ? <li className="nav-footer-element">
                    <Link to="/contact" className="nav-link">Contact us</Link>
                </li> : null}
                <li className="nav-footer-element">
                    <Link to="/faq" className="nav-link">FAQ</Link>
                </li>
            </ul>
        </nav>
    </footer>
    );
}