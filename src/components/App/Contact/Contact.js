import { ContactForm } from "./ContactForm/ContactForm";

export const Contact = () =>{
    return (
        <section className="contact-us-section">
            <p>
                Have a question? Hold off for a moment. Before you use the form below why don't you first check the FAQ section? You might be able to find what you are looking in there. However, feel free to use the contact form to address your question at any time.
            </p>
            <div className="contact-divider"></div>
            <div className="contact-form">
                <ContactForm />
            </div>
        </section>
    );
}