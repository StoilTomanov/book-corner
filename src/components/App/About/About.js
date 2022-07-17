export const About = () => {
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
                    <i className="fa-solid fa-truck-fast"></i>
                    <p>Fast delivery</p>
                </div>
                <div className="free-delivery">
                    <i className="fa-solid fa-money-bill-1-wave"></i>
                    <p>Free delivery over 50lv</p>
                </div>
                <div className="brands">
                    <i className="fa-solid fa-book"></i>
                    <p>Over 300 brands</p>
                </div>
                <div className="sale">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>Quality check</p>
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
            {/* TODO: Remove the hr line */}
            <hr></hr>
        </section>
    );
}