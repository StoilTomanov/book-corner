export const OnSale = () => {
    return (
        <section className="on-sale-page">
            <div className="on-sale-container">
                <ol className="on-sale-list">
                    {/* Iterate through list */}
                    <li className="book-item">
                        <div className="discount">23%</div>
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
                            <div className="date-coming">
                                <span>November 2022</span>
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
                        <div className="discount">40%</div>
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
                            <div className="date-coming">
                                <span>November 2022</span>
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
                        <div className="discount">38%</div>
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
                            <div className="date-coming">
                                <span>November 2022</span>
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