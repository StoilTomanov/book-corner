import { BookItem } from "./BookItem/BookItem";

export const OnSale = () => {
    return (
        <section className="on-sale-page">
            <div className="on-sale-container">
                <ol className="on-sale-list">
                    {/* Iterate through list */}
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </ol>
            </div>
        </section>
    );
}