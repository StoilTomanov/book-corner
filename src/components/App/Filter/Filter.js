export const Filter = () => {
    return (
        <aside className="filter-wrapper">
            <h3 className="filter-header">Quick filter</h3>
            <form className="filter-form">
                <label htmlFor="title">Title: <input type="text" name="title" id="title" /></label>
                <label htmlFor="author">Author: <input type="text" name="author" id="author" /></label>
                <label htmlFor="price">Price: <input type="range" name="price" id="price" /></label>
                <label htmlFor="year">Year: <input type="number" name="year" id="year" min="1950" max="2022" /></label>
                <label htmlFor="genre">Genre: <input type="text" name="genre" id="genre" /></label>
                <button className="submit-btn" type="submit">Apply</button>
            </form>
        </aside>
    );
}