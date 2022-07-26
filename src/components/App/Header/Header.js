import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const pathname = useLocation().pathname;

    return (
        <header id={pathname === '/home' ? 'header' : 'small-header'}>
            <img className={
                pathname === '/home' ? "logo-img" : "smaller-logo-img"
            } src={
                pathname === '/home' ? "./assets/logo_transparent.png" : "./assets/smaller-logo-img.png"
            } alt="Book Corner logo" />
            <nav className="header-nav">
                <ul>
                    {/* <li className="nav-header-element">
                    <Link to="/" className="nav-link">Home</Link>
                </li> */}
                    <li className="nav-header-element">
                        <Link to="/catalog" className="nav-link">Catalog</Link>
                    </li>
                    <li className="nav-header-element">
                        <Link to="/upcoming" className="nav-link">Upcoming</Link>
                    </li>
                    <li className="nav-header-element">
                        <Link to="/sale" className="nav-link">On Sale</Link>
                    </li>
                    <li className="nav-header-element">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-header-element">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                    {/* Logged user */}
                    <li className="nav-header-element">
                    <Link to="/create" className="nav-link">Create</Link>
                </li>
                <li className="nav-header-element">
                    <Link to="/edit" className="nav-link">Edit</Link>
                </li>
                <li className="nav-header-element">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                    <li className="nav-header-element">
                    <Link to="/bin" className="nav-link">Bin</Link>
                </li>
                <li className="nav-header-element">
                    <Link to="/logout" className="nav-link">Logout</Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}