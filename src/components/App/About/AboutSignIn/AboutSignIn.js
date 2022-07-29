export const AboutSignIn = () => {
    return (
        <div className="sign-in-email">
            <img className="email-icon" src="./assets/email-icon.png" alt="Email icon" />
            <input type="email" name="email-news" id="email-news" />
            <button className="sign-in-email-btn">Sign me in</button>
            <div className="confirm-terms">
                <input type="checkbox" /><span>I agree with terms and conditions</span>
            </div>
            <img className="book-icon" src="./assets/book-icon.png" alt="Book icon" />
        </div>
    );
}