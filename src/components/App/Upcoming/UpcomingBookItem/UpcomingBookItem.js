import { useNavigate } from "react-router-dom";

export const UpcomingBookItem = (props) => {
    const navigate = useNavigate();
    const onDetailsNavigateHandler = (ev) => {
        navigate(`/details/${ev.target.dataset.id}`);
    }
    return (
        <li className="book-item">
            <div className="book-card">
                <div className="book-img">
                    <img src={props.data.imageUrl} alt="book" />
                </div>
                <div className="book-title-main">
                    <strong>{props.data.title}</strong>
                </div>
                <div className="book-author">
                    <span>{props.data.author}</span>
                </div>
                <div className="date-coming">
                    <span>{props.data.upcomingDate}</span>
                </div>
                <div className="book-card-btns">
                    <button data-id={props.data._id} onClick={onDetailsNavigateHandler}>Details</button>
                </div>
            </div>
        </li>
    );
}