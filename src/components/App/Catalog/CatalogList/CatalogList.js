import { CatalogItem } from "./CatalogItem/CatalogItem";

export const CatalogList = () => {
    return (
        <ol className="catalog-list">
            {/* Iterate through list */}
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
        </ol>
    );
}


