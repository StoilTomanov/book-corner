import { BookItem } from "./BookItem/BookItem";
import { useEffect, useState } from 'react'
import { getSaleRecords } from "../../../services/api-service";

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
                <ol className="on-sale-list">
                    {state.data.map((element) => {
                        return <BookItem data={element} key={element._id} />
                    })}
                </ol>
            </div>
        </section>
    );
}