import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div id="image-slider">
        <figure>
            <img src="./assets//backgrounds/8314929977_28fd740070_b.jpg" alt="Slider" />
        </figure>
        <div className="home-intro-text">
            Get <span className="color-text">ready</span> to enrich your <span className="color-text">library</span> 
        </div>
        <div className="home-text-divider"></div>
        <div className="home-intro">
            <p>Book Corner is the right place you need to be. This is your spot. The place where you are surrounded by thousands of books. With the size of over 1100 m2 you can easily get lost in the remarkable world of the book. Since you are here, why
                don't you have a look at our online catalog and buy your new book.</p>
                <Link to={'/catalog'}><button>Catalog</button></Link>
        </div>
    </div>
    );
}