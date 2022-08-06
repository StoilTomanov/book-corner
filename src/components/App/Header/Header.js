import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { logout } from '../../../services/user-service';

export const Header = () => {
    const pathname = useLocation().pathname;
    let { authData, authHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout(authData.accessToken)
            .then(() => {
                navigate('/login');
                authHandler({});
            });
    }

    return (
        <header id={pathname === '/home' ? 'header' : 'small-header'}>
            <img className={
                pathname === '/home' ? "logo-img" : "smaller-logo-img"
            } src={
                pathname === '/home' ? "./assets/logo_transparent.png" : "./assets/smaller-logo-img.png"
            } alt="Book Corner logo" />
            {pathname !== '/home' && authData !== undefined ? <span className='user-email'>{authData.email}</span> : null}
            <nav className="header-nav">
            
            <ul>
            {authData.accessToken ? null : 
            <li className="nav-header-element">
                <Link to="/" className="nav-link">Home</Link>
            </li>}
            <li className="nav-header-element">
                <Link to="/catalog" className="nav-link">Catalog</Link>
            </li>
            <li className="nav-header-element">
                <Link to="/upcoming" className="nav-link">Upcoming</Link>
            </li>
            <li className="nav-header-element">
                <Link to="/sale" className="nav-link">On Sale</Link>
            </li>
            {authData.accessToken ? 
            <>
                {authData.isAdmin === true &&
                <>
                    <li className="nav-header-element">
                        <Link to="/create" className="nav-link">Create</Link>
                    </li>
                </>}
                <li className="nav-header-element">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                {authData.isAdmin === false &&
                <li className="nav-header-element">
                    <Link to="/bin" className="nav-link">Bin</Link>
                </li>}
                <li className="nav-header-element">
                    <Link to="/logout" replace onClick={logoutHandler} className="nav-link">Logout</Link>
                </li>
            </>
            :
            <>
                <li className="nav-header-element">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-header-element">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </>}
                </ul>
            </nav>
        </header>
    );
}