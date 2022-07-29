import { FormsHeader } from '../FormsHeader/FormsHeader';
import { RegisterForm } from './RegisterForm/RegisterForm';

export const Register = () => {
    return (
        <section id="register-page section">
            <FormsHeader
                headerTitle="Register"
                imgLeft="./assets/register.png"
                imgRight="./assets/auth2.png"
                headerClassName="register-header"
            />
            <RegisterForm />
        </section>
    );
}