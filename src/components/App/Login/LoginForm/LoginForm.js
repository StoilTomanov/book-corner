import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/AuthContext';

import { login } from '../../../../services/user-service';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';

export const LoginForm = () => {
    const { authHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const [value, setValue] = useState({
        username: '',
        password: '',
    })

    const changeHandler = (ev) => {
        setValue(value => ({
            ...value,
            [ev.target.name]: ev.target.value,
        }));
        
        setErrorMsg((errorMsg) => errorMsg = '');
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        const { username, password } = Object.fromEntries(new FormData(ev.target));
        if(username.trim() === '' || password.trim() === '') {
            setErrorMsg((errorMsg) => errorMsg = 'Username and password are required');
            throw new Error('Username and password are required');
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
                setErrorMsg((errorMsg) => errorMsg = error.message);
                console.error(error);
            });
        }
    }

    return (
        <div className="forms-container">
            <div className="login-element">
                <form className="login-form" onSubmit={onSubmit}>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" value={value.username} onChange={changeHandler} />
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" value={value.password} onChange={changeHandler} />
                    <ErrorMessage message={errorMsg}/>
                    <button className="submit-btn" type="submit">Login</button>
                    <span>You don't have an account? <Link to="/register" className='a-link'>Register here</Link></span>
                </form>
            </div>
        </div>
    );
}