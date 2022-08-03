export const DetailsWrapper = (props) => {
    return (
        <div className="details-wrapper">
            <div className="aside-image">
                <img src={props.data.imageUrl} alt="Book" />
            </div>
            <aside className="aside-details">
                <div className="description">
                    {props.data.description}
                </div>
                <div className="comment-divider"></div>
                <div className="comment-form">
                    <form>
                        <div>
                            <div id="rating-stars">
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>
                        <textarea name="comment-value" id="comment-value" required></textarea>
                        <button className="comment-submit-btn" type="submit">Submit</button>
                    </form>
                </div>
            </aside>
        </div>
    );
}