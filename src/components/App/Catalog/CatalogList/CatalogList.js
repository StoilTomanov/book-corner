import { CatalogItem } from "./CatalogItem/CatalogItem";
import { useEffect, useState } from 'react';
import { getCatalogRecords } from "../../../../services/api-service";

export const CatalogList = () => {
    const [state, setState] = useState({data: []});
    useEffect(()=>{
        getCatalogRecords()
        .then(data => {
            setState((state)=> ({ ...state , data }))
        })
    }, []);
    
    return (
        <ol className="catalog-list">
            {state.data.length === 0 && 
            <h1 className="no-records">No book records are found</h1>}
            {state.data.map((element) => {
                return <CatalogItem data={element} key={element._id}/>
            })}
        </ol>
    );
}