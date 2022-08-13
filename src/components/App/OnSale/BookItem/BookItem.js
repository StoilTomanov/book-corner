import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";

export const BookItem = (props) => {
    const navigate = useNavigate();
    const { authData } = useContext(AuthContext);
    const onDetailsNavigateHandler = (ev) => {
        navigate(`/details/${ev.target.dataset.id}`);
    }
    return (
        <li className="book-item">
            <div className="discount">{props.data.discount !== null ? props.data.discount : 15}%</div>
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
                <div className="book-rating">
                    <span>Rating: {props.data.ratingScore === 0 ? 1 : Number(props.data.ratingScore) / Number(props.data.rating.length)}</span>
                </div>
                <div className="price">
                    <span>{props.data.price} lv</span>
                </div>
                <div className="book-card-btns">
                    <button data-id={props.data._id} onClick={onDetailsNavigateHandler}>Details</button>
                    {authData.isAdmin === false ? <button>Buy</button> : null}
                </div>
            </div>
        </li>
    );
}