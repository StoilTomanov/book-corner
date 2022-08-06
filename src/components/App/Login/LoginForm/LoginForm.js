import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/AuthContext';

import { login } from '../../../../services/user-service';

export const LoginForm = () => {
    const { authHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (ev) => {
        ev.preventDefault();
        const { username, password } = Object.fromEntries(new FormData(ev.target));
        login(username, password)
            .then(data => {
                authHandler(data);
                navigate('/catalog');
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="forms-container">
            <div className="login-element">
                <form className="login-form" onSubmit={onSubmit}>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" />
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" />
                    <button className="submit-btn" type="submit">Login</button>
                    <span>You don't have an account? <Link to="/register" className='a-link'>Register here</Link></span>
                </form>
            </div>
        </div>
    );
}