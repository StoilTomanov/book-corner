export const Comment = (props) => {
    return(
        props.comments.comments?.map((comment) => {
            return(
                comment.username && comment.comment ? 
                <div key={props.comments._id} className="comment-card">
                    <img src="../assets/profile-img.webp" alt="Profile" />
                    <div className="reviewer">
                        {comment.username}
                    </div>
                    <div id="rating-score">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <p>{comment.comment}</p>
                </div>
                :<div key={props.comments._id} className="no-comments">
                    <h3>No comments for this book</h3>
                </div>
            );
        })
    );
}