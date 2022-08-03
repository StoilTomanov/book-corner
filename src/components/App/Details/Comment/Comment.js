export const Comment = () => {
    return(
        <div className="comment-card">
            <img src="../assets/profile-img.webp" alt="Profile" />
            <div id="rating-score">
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
            <p>I love it</p>
        </div>
    );
}