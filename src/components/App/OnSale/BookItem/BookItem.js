export const BookItem = (props) => {
    return (
        <li className="book-item">
            <div className="discount">{props.data.discount}%</div>
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
                <div className="book-rating">
                    <span>Rating: {props.data.ratingScore}</span>
                </div>
                <div className="price">
                    <span>{props.data.price} lv</span>
                </div>
                <div className="book-card-btns">
                    <button>Details</button>
                    <button>Buy</button>
                </div>
            </div>
        </li>
    );
}