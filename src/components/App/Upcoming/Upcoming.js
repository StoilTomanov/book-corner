import { UpcomingBookItem } from "./UpcomingBookItem/UpcomingBookItem";
import { useEffect, useState } from 'react'
import { getUpcomingRecords } from "../../../services/api-service";

export const Upcoming = () => {
    const [state, setState] = useState({data: []});
    useEffect(()=>{
        getUpcomingRecords()
        .then(data => {
            setState((state)=> ({ ...state , data }))
        })
    }, []);

    return (
        <section className="upcoming-page">
            <div className="upcoming-container">
                <ol className="upcoming-list">
                    {state.data.length === 0 && 
                    <h1 className="no-records">No book records are found</h1>}
                    {state.data.map((element) => {
                        return <UpcomingBookItem data={element} key={element._id}/>
                    })}
                </ol>
            </div>
        </section>
    );
}