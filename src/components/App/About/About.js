import { faTruck, faMoneyBill1Wave, faBook, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { AboutContacts } from './AboutContacts/AboutContacts';
import { AboutSignIn } from './AboutSignIn/AboutSignIn';
import { AboutText } from './AboutText/AboutText';
import { ServiceCard } from './ServiceCard/ServiceCard';

export const About = () =>
{
    return (
        <section className="about-page">
            <h1>About us</h1>
            <AboutText />
            <div className="services">
                <ServiceCard icon={faTruck}/>
                <ServiceCard icon={faMoneyBill1Wave}/>
                <ServiceCard icon={faBook}/>
                <ServiceCard icon={faCircleCheck}/>
            </div>
            <h2>How about visiting us?</h2>
            <AboutContacts />
            <AboutSignIn />
        </section>
    );
}