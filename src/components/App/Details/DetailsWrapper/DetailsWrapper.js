export const DetailsWrapper = (props) => {
    return (
        <div className="details-wrapper">
            <div className="aside-image">
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
                </div>
                <button className="control-btn-edit" data-id={props.data._id}>Edit</button>
                <button className="control-btn-delete" data-id={props.data._id}>Delete</button>
            </aside>
        </div>
    );
}