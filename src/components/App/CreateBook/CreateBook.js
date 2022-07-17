export const CreateBook = () => {
    return (
        <section className="create-book">
            <div className="create-book-header">
                <div className="form-header">
                    <img className="create-icon" src="./assets/add_edit3.png" alt="Create icon" />
                    <h1>Create new record</h1>
                    <img className="book-icon" src="./assets/book-icon.png" alt="Book icon" />
                </div>
            </div>
            <div className="form">
                <form className="create-form">
                    <div className="form-row">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="year">Year</label>
                        <input type="text" name="year" id="year" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="pages">Pages</label>
                        <input type="text" name="pages" id="pages" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" id="price" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="image">Image Url</label>
                        <input type="text" name="image" id="image" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="descriptions">Description</label>
                        <input type="text" name="descriptions" id="descriptions" />
                    </div>
                    <div className="form-row">
                        <button className="submit-create-btn" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </section>
    );
}