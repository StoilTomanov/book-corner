export const Contact = () =>{
    return (
        <section className="contact-us-section">
            <p>
                Have a question? Hold off for a moment. Before you use the form below why don't you first check the FAQ section? You might be able to find what you are looking in there. However, feel free to use the contact form to address your question at any time.
            </p>
            <div className="contact-form">
                <form>
                    <input type="text" name="email" id="email" placeholder="john.doe@abv.com" />
                    <select name="topic" id="topic">
                        <option value="Select your topic">Select your topic</option>
                        <option value="My profile">My profile</option>
                        <option value="Our books">Our books</option>
                        <option value="Issue with site">Issue with site</option>
                        <option value="Other">Other</option>
                    </select>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your question here..."></textarea>
                    <button className="send-contact-form" type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}