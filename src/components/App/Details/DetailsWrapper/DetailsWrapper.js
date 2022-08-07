import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { deleteBookRecord, updateBookComments } from "../../../../services/api-service";
import { useNavigate } from "react-router-dom";
import { RatingSetter } from "../../RatingSetter/RatingSetter";

export const DetailsWrapper = (props) => {
    const { authData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [commentData, setComment] = useState({
        username: '',
        rating: 1,
        comment: '',
    });

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

    const changeRatingHandler = (ev) => {
        if(ev.target.id === 'comment-form-submit'){
            Array.from(ev.target.children[0].children[0].children).map((child, index) => {
                if(index !== 0){
                    child.style.color = '';
                    child.style.fontSize = '100%';
                }
                return child;
            })
            return 0;
        } else if(ev.target.parentElement.id === 'rating-stars-user') {
            Array.from(ev.target.parentElement.children).map((child, index) => {
                if(index !== 0){
                    if(Number(child.id.split('-')[1]) <= ev.target.id.split('-')[1]) {
                        child.style.color = 'orange';
                        child.style.fontSize = '120%';
                    } else {
                        child.style.color = '';
                        child.style.fontSize = '100%';
                    }
                }
                return child;
            })
            setComment((commentData) => ({
                ...commentData,
                rating: Number(ev.target.id.split('-')[1]) === 0 ? 1 : Number(ev.target.id.split('-')[1]),
                username: authData.username
            }));
        }
    }

    const commentChangeHandler = (ev) => {
        setComment((commentData) => ({
            ...commentData,
            comment: ev.target.value,
            username: authData.username
        }));
    }

    const submitHandler = (ev) => {
        props.setState((oldState) => ({...oldState}));
        ev.preventDefault();
        updateBookComments(commentData, props.data._id, authData.accessToken)
            .then(()=>{
                //TODO: find a way to update the props of the comments component so it can re-render
            })
        setTimeout(() => {
            setComment(() => ({
                username: '',
                rating: changeRatingHandler(ev),
                comment: '',
            }));
        }, 200);
    }

    return (
        <div className="details-wrapper">
            <div className="aside-image">
                <div className="book-title">{props.data.title}</div>
                <img src={props.data.imageUrl} alt="Book" />
                <div id="rating-stars">
                    <RatingSetter data={props.data}/>
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
                <form id="comment-form-submit" onSubmit={submitHandler}>
                    <div>
                        <div id="rating-stars-user" onClick={changeRatingHandler}>
                            <span>Rate this book:</span>
                            <span id="star-1" className="fa fa-star checked"></span>
                            <span id="star-2" className="fa fa-star"></span>
                            <span id="star-3" className="fa fa-star"></span>
                            <span id="star-4" className="fa fa-star"></span>
                            <span id="star-5" className="fa fa-star"></span>
                        </div>
                    </div>
                    <textarea name="comment-value" value={commentData.comment} id="comment-value" required placeholder="Add comment" onChange={commentChangeHandler}></textarea>
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