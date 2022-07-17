export const Header = () => {
    return (
        <header id="header">
        <img className="logo-img" src="./assets/logo_transparent.png" alt="Book Corner logo" />
        <nav className="header-nav">
            <ul>
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Catalog</a>
                </li>
                {/* <li className="nav-header-element">
                    <a href="#" className="nav-link">Newest</a>
                </li>
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Upcoming</a>
                </li>
                <li className="nav-header-element">
                    <a href="#" className="nav-link">On Sale</a>
                </li> */}
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Login</a>
                </li>
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Register</a>
                </li>
                {/* Logged user */}
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Create</a>
                </li>
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Edit</a>
                </li>
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Profile</a>
                </li>
                {/* <li className="nav-header-element">
                    <a href="#" className="nav-link">Bin</a>
                </li>
                <li className="nav-header-element">
                    <a href="#" className="nav-link">Logout</a>
                </li> */}
            </ul>
        </nav>
    </header>
    );
}