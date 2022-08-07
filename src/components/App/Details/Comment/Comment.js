import { RatingCommentSetter } from "../../RatingCommentSetter/RatingCommentSetter";

export const Comment = (props) => {
    return(
        props.data.comments?.map((comment) => {
            return props.data.comments.length === 1 ? 
            <div key={props.data._id} className="no-comments">
                <h3>No comments for this book</h3>
            </div> : 
            (
                comment.username && comment.comment ? 
                <div key={comment.comment_id} className="comment-card">
                    <img src="../assets/profile-img.webp" alt="Profile" />
                    <div className="reviewer">
                        {comment.username}
                    </div>
                    <div id="rating-score">
                        <RatingCommentSetter data={comment}/>
                    </div>
                    <p>{comment.comment}</p>
                </div>
                :null
            );
        })
    );
}