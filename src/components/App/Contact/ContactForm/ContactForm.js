import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import { updateMessages } from "../../../../services/user-service";

import { ErrorMessage } from "../../ErrorMessage/ErrorMessage";

export const ContactForm = () => {
    const { authData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [value, setValue] = useState({
        from: '',
        topic: '',
        message: '',
    });
    
    const changeHandler = (ev) => {
        setValue(value => ({
            ...value,
            [ev.target.name]: ev.target.value,
        }));

        setError(error => error = '');
    };

    const checkFormData = (data) => {
        let isValid = true;
        Object.values(data).forEach((el) => {
            if(el === '' || el === 'Select your topic') {
                isValid = false;
            }
        });
        return isValid;
    }

    const submitHandler = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        if(authData._id) {
            formData.append('from', authData.email);
        }
        if(authData.isAdmin === true) {
            formData.append('isAdmin', true);
        } else {
            formData.append('isAdmin', false);
        }
        const contactData = Object.fromEntries(formData);
        if(!checkFormData(contactData)) {
            setError(error => error = true);
        } else {
            updateMessages('update', authData.email || contactData.from, false, contactData)
                .then();
                console.log(contactData)
            navigate('/catalog');
        }
    }

    return (
        <form onSubmit={submitHandler}>
            {!authData.accessToken && 
            <input type="text" name="from" id="from" placeholder="john.doe@abv.com" value={value.from} onChange={changeHandler}/>}
            <select name="topic" id="topic" value={value.topic} onChange={changeHandler}>
                <option value="Select your topic">Select your topic</option>
                <option value="My profile">My profile</option>
                <option value="Our books">Our books</option>
                <option value="Issue with site">Issue with site</option>
                <option value="Other">Other</option>
            </select>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your question here..." value={value.message} onChange={changeHandler}></textarea>
            {error && 
            <ErrorMessage message='All fields are required' />}
            <button className="send-contact-form" type="submit">Send</button>
        </form>
    );
}