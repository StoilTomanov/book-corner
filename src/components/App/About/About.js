import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faMoneyBill1Wave, faBook, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const About = () =>
{
    return (
        <section className="about-page">
            <h1>About us</h1>
            <div className="about-text">
                <p>
                    Hey there. You seems to be a little bit more interested in <strong>Book Corner</strong>, aren't you? Well, here you will find more about our favorite book store. We offer free delivery, constant sales, free delivery for books over
                    50lv, quality check and many more. Did we mentioned that we have more than 300 brands? Go find yours and purchase your favorite book.
                </p>
            </div>
            <div className="services">
                {/* TODO: Check font awesome setup for React!!! */}
                <div className="fast-delivery">
                    <FontAwesomeIcon icon={faTruck} className="font-awesome" />
                    <p>Fast delivery</p>
                </div>
                <div className="free-delivery">
                    <FontAwesomeIcon icon={faMoneyBill1Wave} className="font-awesome" />
                    <p>Free delivery over 50lv</p>
                </div>
                <div className="brands">
                    <FontAwesomeIcon icon={faBook} className="font-awesome" />
                    <p>Over 300 brands</p>
                </div>
                <div className="sale">
                    <FontAwesomeIcon icon={faCircleCheck} className="font-awesome" />
                    <p>Quality check</p>
                </div>
            </div>
            <h2>Reach us!</h2>
            <div className='contacts'>
                <div className='map'>
                    <a href='https://www.google.com/maps/@40.705942,-74.0162614,14.29z' target='_blank' rel='noreferrer'><img src="./assets/maps.png" alt="Location" /></a>
                </div>
                <div className="address">
                    <p>
                        Headquarter: 5th Avenue, NewYork, NY, USA
                    </p>
                    <p>
                        Storage: 6th Avenue, Boston, MS, USA
                    </p>
                    <p>
                        +1 333 1234567
                    </p>
                    <p>
                        Working time: Every day!
                    </p>
                    <p>
                        Email: book-corner@book.com
                    </p>
                </div>
            </div>
            <div className="sign-in-email">
                <img className="email-icon" src="./assets/email-icon.png" alt="Email icon" />
                <input type="email" name="email-news" id="email-news" />
                <button className="sign-in-email-btn">Sign me in</button>
                <div className="confirm-terms">
                    <input type="checkbox" /><span>I agree with terms and conditions</span>
                </div>
                <img className="book-icon" src="./assets/book-icon.png" alt="Book icon" />
            </div>
        </section>
    );
}