import { Link } from 'react-router-dom';

import { FormsHeader } from '../FormsHeader/FormsHeader';

export const Login = () => {
    return (
        <section id="login-page section">
            <FormsHeader
                headerTitle="Login"
                imgLeft="./assets/login.png"
                imgRight="./assets/auth1.png"
                headerClassName="login-header"
            />
            <div className="forms-container">
                <div className="login-element">
                    <form className="login-form">
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" />
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" />
                        <button className="submit-btn" type="submit">Login</button>
                        <span>You don't have an account? <Link to="/register" className='a-link'>Register here</Link></span>
                    </form>
                </div>
            </div>
        </section>
    );
}