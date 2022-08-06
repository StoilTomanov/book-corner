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
        if(username.trim() === '' || password.trim() === '') {
            throw new Error('Username and password are required');
            //TODO: update a state that will decide when to show the ErrorMessage component
        } else {
            login(username, password)
            .then(data => {
                if(data === undefined || data === "undefined"){
                    throw new Error('Something went wrong');
                } else {
                    authHandler(data);
                    navigate('/catalog');
                }
            })
            .catch((error) => {
                //TODO: update a state that will decide when to show the ErrorMessage component
                console.error(error);
            });
        }
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