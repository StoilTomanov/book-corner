import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { buyBook } from "../../../../../utils/buyBook";

export const CatalogItem = (props) => {
    const navigate = useNavigate();
    const { authData } = useContext(AuthContext);
    const onDetailsNavigateHandler = (ev) => {
        navigate(`/details/${ev.target.dataset.id}`);
    };

    const buyHandler = (ev) => {
        buyBook({
            bookId: ev.target.dataset.id,
            bookName: props.data.title,
        }, authData._id, authData.accessToken)
    };

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
                <div className="book-rating">
                    <span>Rating: {props.data.ratingScore === 0 ? 1 : Number(props.data.ratingScore) / Number(props.data.rating.length)}</span>
                </div>
                <div className="price">
                    <span>{props.data.price} $</span>
                </div>
                <div className="book-card-btns">
                    <button data-id={props.data._id} onClick={onDetailsNavigateHandler}>Details</button>
                    {authData.isAdmin === false ? <button data-id={props.data._id} onClick={buyHandler} >Buy</button> : null}
                </div>
            </div>
        </li>
    );
}


