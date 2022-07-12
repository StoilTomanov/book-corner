export const AuthForms = () => {
    return (
        <section className="forms-page section">
            <div className="form-controls">
                <button className="login">
                    Login
                </button>
                <button className="register">
                    Register
                </button>
            </div>
            <div className="line-divider"></div>
            <div className="forms-container">
            <div className="login-element">
                    <form className="login-form">
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" />
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" />
                        <button className="submit-btn" type="submit">Login</button>
                    </form>
                </div>
                <div className="register-element">
                    <form className="register-form">
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" />
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" />
                        <label htmlFor="re-password">Re-Password</label>
                        <input name="re-password" type="password"/ >
                        <button className="submit-btn" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </section>
    );
}