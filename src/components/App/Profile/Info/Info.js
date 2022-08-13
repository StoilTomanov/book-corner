import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { getCurrentUser, updateUser } from "../../../../services/user-service";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useEffect } from "react";

export const Info = () => {
    const {authData} = useContext(AuthContext);
    const [value, setValue] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        telephone: '',
        birthDate: '',
    });

    useEffect(()=>{
        getCurrentUser(authData.accessToken, authData._id)
        .then((data)=> {
            setValue(value => ({
                username: data.username,
                email: data.email,
                password: '',
                address: data.address || '',
                telephone: data.telephone || '',
                birthDate: data.birthDate || '',
            }));
        })
    }, [authData.accessToken, authData._id]);

    const changeHandler = (ev) => {
        setValue(value => ({
            ...value,
            [ev.target.name]: ev.target.value,
        }));
    };

    const toggleContentHandler = (ev) => {
        const toggleElement = ev.target.nextSibling;
        if(toggleElement.style.display === 'block'){
            toggleElement.style.display = 'none';
        } else {
            toggleElement.style.display = 'block';
        }
    }

    const submitHandler = (ev) => {
        ev.preventDefault();
        setValue(value => ({
            ...value,
            [ev.target.children[0].name]: ev.target.children[0].value,
        }));

        updateUser(value, authData._id, authData.accessToken);
    }

    return (
        <div className="info-content-wrapper">
            <button onClick={toggleContentHandler} id="toggle-profile-details"><FontAwesomeIcon icon={faCaretDown} /> Profile details</button>
            <div id="profile-details-toggle" className="toggle">
                <form onSubmit={submitHandler}>
                    <input className="profile-input" id="username" name="username" type="text" placeholder="Username" value={value.username} onChange={changeHandler} />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                <form onSubmit={submitHandler}>
                    <input className="profile-input" id="email" name="email" type="text" placeholder="Email" value={value.email} onChange={changeHandler} />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                <form onSubmit={submitHandler}>
                    <input className="profile-input" id="password" name="password" type="password" placeholder="Password" value={value.password} onChange={changeHandler} />
                    <button className="update-user-data" type="submit">Update</button>  
                </form>
            </div>
            <button onClick={toggleContentHandler} id="toggle-personal-info"><FontAwesomeIcon icon={faCaretDown} /> Personal Info</button>
            <div id="personal-info-toggle" className="toggle">
                <div>
                <form onSubmit={submitHandler}>
                    <input className="profile-input" id="address" name="address" type="text" placeholder="Address" value={value.address} onChange={changeHandler} />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                <form onSubmit={submitHandler}>
                    <input className="profile-input" id="telephone" name="telephone" type="text" placeholder="Telephone" value={value.telephone} onChange={changeHandler} />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                <form onSubmit={submitHandler}>
                    <input className="profile-input" id="birthData" name="birthDate" type="date" placeholder="Birth Date" value={value.birthDate} onChange={changeHandler} />
                    <button className="update-user-data" type="submit">Update</button>
                </form>
                </div>
            </div>
        </div>
    );
}