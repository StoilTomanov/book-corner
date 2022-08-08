import { useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { getCurrentUser } from "../../../services/user-service";

export const Profile = () => {
    const [user, setUser] = useState({});
    const {authData} = useContext(AuthContext);

    useEffect(()=>{
        getCurrentUser(authData.accessToken, authData._id)
        .then(data => {
            setUser((user) => user = data);
            console.log(data);
        });
    }, [authData._id, authData.accessToken]);
    


    return (
        <section className="profile-page">
            <div className="profile-container">
                <div className="horizontal-divider"></div>
                <div className="all-tabs">
                    <button className="profile-tab"><Link to="/profile/profile">Profile</Link></button>
                    <div className="vertical-divider"></div>
                    <button className="orders-tab" navigate><Link to="/profile/orders">Orders</Link></button>
                    <div className="vertical-divider"></div>
                    <div className="profile-image">
                        <img src={user.profilePicture} alt="" className="avatar" />
                    </div>
                    <div className="vertical-divider"></div>
                    <button className="addresses-tab" navigate><Link to="/profile/addresses">Addresses</Link></button>
                    <div className="vertical-divider"></div>
                    <button className="info-tab" navigate><Link to="/profile/info">Personal info</Link></button>
                </div>
                <div className="profile-content">
                    <Outlet />
                </div>
            </div>
        </section>
    );
}