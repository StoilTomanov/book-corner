import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/AuthContext';
import { register } from '../../../../services/user-service';

export const RegisterForm = () => {
    const { authHandler } = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState({
        username: '',
        email: '',
        gender: 'Male',
        password: '',
        rePassword: '',
    });

    const changeHandler = (ev) => {
        setValue(state => ({
            ...state,
            [ev.target.name]: ev.target.value,
        }))
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        const { username, password, rePassword, email, gender } = Object.fromEntries(new FormData(ev.target));
        if(password.trimEnd() === rePassword.trim()) {
            register(username, password, email, gender)
                .then(data => {
                    authHandler(data);
                    navigate('/catalog');
                    console.log(data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }    


    return (
        <div className="forms-container">
            <div className="register-element">
                <form className="register-form" onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                    <input name="username" type="text" value={value.username} onChange={changeHandler} />
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" value={value.email} onChange={changeHandler} />
                    <div className='gender'>
                        <p>Gender</p>
                        <label htmlFor="gender">
                            <input type="radio" id='gender' name='gender' value='Male' checked={value.gender === 'Male'} onChange={changeHandler} />
                            <span>Male</span>
                        </label>
                        <label htmlFor="gender-1">
                            <input type="radio" id='gender-1' name='gender' value='Female' checked={value.gender === 'Female'} onChange={changeHandler} />
                            <span>Female</span>
                        </label>
                    </div>                    
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" value={value.password} onChange={changeHandler} />
                    <label htmlFor="rePassword">Re-Password</label>
                    <input name="rePassword" type="password" value={value.rePassword} onChange={changeHandler} />
                    <button className="submit-btn" type="submit">Register</button>
                    <span>Already have an account? <Link to="/login" className='a-link'>Login here</Link></span>
                </form>
            </div>
        </div>
    );
}