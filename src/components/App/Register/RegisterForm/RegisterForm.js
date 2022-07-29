import { Link } from 'react-router-dom';

export const RegisterForm = () => {
    return (
        <div className="forms-container">
            <div className="register-element">
                <form className="register-form">
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" />
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" />
                    <label htmlFor="re-password">Re-Password</label>
                    <input name="re-password" type="password" />
                    <button className="submit-btn" type="submit">Register</button>
                    <span>Already have an account? <Link to="/login" className='a-link'>Login here</Link></span>
                </form>
            </div>
        </div>
    );
}