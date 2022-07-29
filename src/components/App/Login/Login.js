import { FormsHeader } from '../FormsHeader/FormsHeader';
import { LoginForm } from './LoginForm/LoginForm';

export const Login = () => {
    return (
        <section id="login-page section">
            <FormsHeader
                headerTitle="Login"
                imgLeft="./assets/login.png"
                imgRight="./assets/auth1.png"
                headerClassName="login-header"
            />
            <LoginForm />
        </section>
    );
}