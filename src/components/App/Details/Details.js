export const Details = () => {
    return (
        <section className="details-page">
            <div className="details-wrapper">
                <div className="aside-image">
                    <img src="../assets/green_mile.jpg" alt="Book" />
                </div>
                <aside className="aside-details">
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia facilis magni consequuntur tempora, obcaecati optio minima veritatis animi nulla tenetur cupiditate veniam beatae quis dolore porro assumenda illo corrupti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia facilis magni consequuntur tempora, obcaecati optio minima veritatis animi nulla tenetur cupiditate veniam beatae quis dolore porro assumenda illo corrupti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia facilis magni consequuntur tempora, obcaecati optio minima veritatis animi nulla tenetur cupiditate veniam beatae quis dolore porro assumenda illo corrupti.
                    </div>
                    <div className="comment-form">
                        <form>
                            <input type="text" id="comment-username" placeholder="Your name" required />
                            <div>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <input type="text" id="comment-value" placeholder="Comment" required />
                        </form>
                    </div>
                </aside>
            </div>
            <div className="comments-wrapper">
                <div className="comment-card">
                    <div>5 Stars</div>
                    <img src="./assets/profile-img.webp" alt="Profile" />
                    <p>I have read this book 3 times. I strongly recommend it!</p>
                </div>
                <div className="comment-card">
                    <div>5 Stars</div>
                    <img src="./assets/profile-img.webp" alt="Profile" />
                    <p>I have read this book 3 times. I strongly recommend it!</p>
                </div>
                <div className="comment-card">
                    <div>5 Stars</div>
                    <img src="./assets/profile-img.webp" alt="Profile" />
                    <p>I have read this book 3 times. I strongly recommend it!</p>
                </div>
            </div>
        </section>
    );
}