import { CatalogList } from "./CatalogList/CatalogList";
import { Filter } from "../Filter/Filter";

export const Catalog = () => {
    return (
        <section className="catalog-page">
            <div className="catalog-container">
                <Filter />
                <CatalogList />
            </div>
        </section>
    );
}