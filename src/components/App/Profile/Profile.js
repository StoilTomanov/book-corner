import { useContext, useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { getCurrentUser } from "../../../services/user-service";

export const Profile = () => {
    const [user, setUser] = useState({});
    const {authData} = useContext(AuthContext);
    const pathname = useLocation().pathname;

    useEffect(()=>{
        getCurrentUser(authData.accessToken, authData._id)
        .then(data => {
            setUser((user) => user = data);
        });
    }, [authData._id, authData.accessToken]);

    return (
        <section className="profile-page">
            <div className="profile-container">
                <div className="horizontal-divider"></div>
                <div className="all-tabs">
                    <Link to="/profile/myplace" className={pathname === '/profile/myplace' ? 'checked' : ''}>My Place</Link>
                    <div className="profile-image">
                        <img src={`/${user.profilePicture}`} alt="" className="avatar" />
                    </div>
                    <Link to="/profile/info" className={pathname === '/profile/info' ? 'checked' : ''}>Personal info</Link>
                </div>
                <div className="profile-content">
                    {pathname === '/profile' && 
                    <div>
                        <h1>Welcome to your profile page. This is your spot! From here you can see you profile details, personal information, addresses, statistics and more. Click one of the tabs to start.</h1>
                    </div>}
                    <Outlet />
                </div>
            </div>
        </section>
    );
}