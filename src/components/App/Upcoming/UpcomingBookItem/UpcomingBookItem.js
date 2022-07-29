export const UpcomingBookItem = () => {
    return (
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
                <div className="date-coming">
                    <span>May 2023</span>
                </div>
                <div className="price">
                    <span>25.00 lv</span>
                </div>
                <div className="book-card-btns">
                    <button>Details</button>
                </div>
            </div>
        </li>
    );
}