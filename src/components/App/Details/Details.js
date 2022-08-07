import { Comment } from "./Comment/Comment";
import { DetailsWrapper } from "./DetailsWrapper/DetailsWrapper";

import { useEffect, useState } from 'react';
import { getBookData } from "../../../services/api-service";
import { useParams } from "react-router-dom";

export const Details = () => {
    const [state, setState] = useState({data: []});
    const params = useParams();
    useEffect(()=>{
        getBookData(params.id)
        .then(data => {
            setState((state)=> ({ ...state , data }));
        })
    }, [params.id]);

    return (
        <section className="details-page">
            <DetailsWrapper data={state.data}/>
            <div className="comments-wrapper">
                <h2>Comments section</h2>
                <Comment key={state.data._id} data={state.data}/>
            </div>
        </section>
    );
}