import { BookItem } from "./BookItem/BookItem";
import { useEffect, useState } from 'react'
import { getSaleRecords } from "../../../services/api-service";
import { Filter } from "../Filter/Filter";

export const OnSale = () => {
    const [state, setState] = useState({data: []});
    useEffect(()=>{
        getSaleRecords()
        .then(data => {
            setState((state)=> ({ ...state , data }))
        })
    }, []);
    
    return (
        <section className="on-sale-page">
            <div className="on-sale-container">
                <Filter />
                <ol className="on-sale-list">
                    {state.data.length === 0 && 
                    <h1 className="no-records">No book records are found</h1>}
                    {state.data.map((element) => {
                        return <BookItem data={element} key={element._id} />
                    })}
                </ol>
            </div>
        </section>
    );
}