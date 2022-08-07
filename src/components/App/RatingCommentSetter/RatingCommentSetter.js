export const RatingCommentSetter = (props) => {
    if(!(props.data instanceof Array)){
            const userRating = props.data.rating;
            const uncheckedStars = 5 - userRating;
            const checkedArr = [];
            const uncheckedArr = [];
            
            for(let i = 0; i < userRating; i++) {
            checkedArr.push(<span key={i} className="fa fa-star checked"></span>)
        }

        for(let i = 0; i < uncheckedStars; i++) {
            uncheckedArr.push(<span key={i} className="fa fa-star"></span>)
        }
        
        return(
            <>
            {checkedArr.map((el) => {
                return(
                    el
                )
            })}
            {uncheckedArr.map((el) => {
                return(
                    el
                )
            })}
            </>
        );
    } else {
        return null;
    }
}