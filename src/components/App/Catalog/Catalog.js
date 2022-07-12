export const Catalog = () => {
    return (
        <section className="catalog-page">
            <div className="catalog-container">
                <aside>
                    <h3 className="filter-header">Quick filter</h3>
                    <form className="filter-form">
                        <label htmlFor="title">Title: <input type="text" name="title" id="title" /></label>
                        <label htmlFor="author">Author: <input type="text" name="author" id="author" /></label>
                        <label htmlFor="price">Price: <input type="range" name="price" id="price" /></label>
                        <label htmlFor="year">Year: <input type="number" name="year" id="year" min="1950" max="2022" /></label>
                        <label htmlFor="genre">Genre: <input type="text" name="genre" id="genre" /></label>
                        <button className="submit-btn" type="submit">Filter</button>
                    </form>
                </aside>
                <ol>
                    {/* Iterate through list */}
                    <li className="book-item">
                        <div className="book-card">
                            <div className="book-img">
                                <img src="./assets/green_mile.jpg" alt="book" />
                            </div>
                            <div className="book-title">
                                <strong>Green Mile</strong>
                            </div>
                            <div className="book-author">
                                <span>Steven King</span>
                            </div>
                            <div className="book-rating">
                                <span>Rating: 4/5</span>
                            </div>
                            <div className="price">
                                <span>25.00 lv</span>
                            </div>
                            <div className="book-card-btns">
                                <button>Details</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </li>
                    <li className="book-item">
                        <div className="book-card">
                            <div className="book-img">
                                <img src="./assets/green_mile.jpg" alt="book" />
                            </div>
                            <div className="book-title">
                                <strong>Green Mile</strong>
                            </div>
                            <div className="book-author">
                                <span>Steven King</span>
                            </div>
                            <div className="book-rating">
                                <span>Rating: 4/5</span>
                            </div>
                            <div className="price">
                                <span>25.00 lv</span>
                            </div>
                            <div className="book-card-btns">
                                <button>Details</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </li>
                    <li className="book-item">
                        <div className="book-card">
                            <div className="book-img">
                                <img src="./assets/green_mile.jpg" alt="book" />
                            </div>
                            <div className="book-title">
                                <strong>Green Mile</strong>
                            </div>
                            <div className="book-author">
                                <span>Steven King</span>
                            </div>
                            <div className="book-rating">
                                <span>Rating: 4/5</span>
                            </div>
                            <div className="price">
                                <span>25.00 lv</span>
                            </div>
                            <div className="book-card-btns">
                                <button>Details</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </li>
                    <li className="book-item">
                        <div className="book-card">
                            <div className="book-img">
                                <img src="./assets/green_mile.jpg" alt="book" />
                            </div>
                            <div className="book-title">
                                <strong>Green Mile</strong>
                            </div>
                            <div className="book-author">
                                <span>Steven King</span>
                            </div>
                            <div className="book-rating">
                                <span>Rating: 4/5</span>
                            </div>
                            <div className="price">
                                <span>25.00 lv</span>
                            </div>
                            <div className="book-card-btns">
                                <button>Details</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </li>
                    <li className="book-item">
                        <div className="book-card">
                            <div className="book-img">
                                <img src="./assets/green_mile.jpg" alt="book" />
                            </div>
                            <div className="book-title">
                                <strong>Green Mile</strong>
                            </div>
                            <div className="book-author">
                                <span>Steven King</span>
                            </div>
                            <div className="book-rating">
                                <span>Rating: 4/5</span>
                            </div>
                            <div className="price">
                                <span>25.00 lv</span>
                            </div>
                            <div className="book-card-btns">
                                <button>Details</button>
                                <button>Buy</button>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
}