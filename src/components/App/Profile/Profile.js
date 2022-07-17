export const Profile = () =>
{
    return (
        <section className="profile-page">
            <div className="profile-container">
                <div className="horizontal-divider"></div>
                <div className="all-tabs">
                    <button className="profile-tab">Profile</button>
                    <div className="vertical-divider"></div>
                    <button className="orders-tab">Orders</button>
                    <div className="profile-image">
                        <img src="./assets/profile-img.webp" alt="" className="avatar" />
                    </div>
                    <button className="addresses-tab">Addresses</button>
                    <div className="vertical-divider"></div>
                    <button className="info-tab">Personal info</button>
                </div>
                <div className="profile-content">
                    Main profile content here
                </div>
            </div>
        </section>
    );
}