import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { deleteBookRecord } from "../../../../services/api-service";
import { useNavigate } from "react-router-dom";

export const DetailsWrapper = (props) => {
    const { authData } = useContext(AuthContext);
    const navigate = useNavigate();

    const deleteRecordHandler = (ev) => {
        const bookId = ev.target.dataset.id;
        deleteBookRecord(bookId, authData.accessToken)
            .then(() => {
                navigate('/catalog');
            })
    };

    const editRecordHandler = (ev) => {
        const bookId = ev.target.dataset.id;
        navigate(`/edit/${bookId}`);
    };

    return (
        <div className="details-wrapper">
            <div className="aside-image">
                <div className="book-title">{props.data.title}</div>
                <img src={props.data.imageUrl} alt="Book" />
                <div id="rating-stars">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
            </div>
            <aside className="aside-details">
                <div className="description">
                    {props.data.description}
                </div>
                <div className="description-divider"></div>
                <div className="details-elements">
                    <div>
                        Pages: {props.data.pages}
                    </div>
                    <div>
                        Year: {props.data.year}
                    </div>
                </div>
                <div className="price-tag">
                    {props.data.price} $
                </div>
                <div className="comment-divider"></div>
                {authData.accessToken && 
                <>
                {authData.isAdmin !== true ? 
                <div className="comment-form">
                <form>
                    <div>
                        <div id="rating-stars-user">
                            <span>Rate this book:</span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                    </div>
                    <textarea name="comment-value" id="comment-value" required placeholder="Add comment"></textarea>
                    <button className="comment-submit-btn" type="submit">Submit</button>
                </form>
                </div> : 
                <>
                <button className="control-btn-edit" data-id={props.data._id} onClick={editRecordHandler}>Edit</button>
                <button className="control-btn-delete" data-id={props.data._id} onClick={deleteRecordHandler}>Delete</button>
                </>}
                </>}
            </aside>
        </div>
    );
}