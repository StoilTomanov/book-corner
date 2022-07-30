export const UpcomingBookItem = (props) => {
    return (
        <li className="book-item">
            <div className="book-card">
                <div className="book-img">
                    <img src={props.data.imageUrl} alt="book" />
                </div>
                <div className="book-title">
                    <strong>{props.data.title}</strong>
                </div>
                <div className="book-author">
                    <span>{props.data.author}</span>
                </div>
                <div className="date-coming">
                    <span>May 2023</span>
                </div>
                <div className="price">
                    <span>{props.data.price} lv</span>
                </div>
                <div className="book-card-btns">
                    <button>Details</button>
                </div>
            </div>
        </li>
    );
}