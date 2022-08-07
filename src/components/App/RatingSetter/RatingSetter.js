export const RatingSetter = (props) => {
    if(!(props.data instanceof Array)){
            const totalRating = props.data.ratingScore;
            const voters = props.data.rating.length;
            const checkedStars = Math.ceil(totalRating / voters);
            const uncheckedStars = 5 - checkedStars;
            const checkedArr = [];
            const uncheckedArr = [];
            
            for(let i = 0; i < checkedStars; i++) {
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