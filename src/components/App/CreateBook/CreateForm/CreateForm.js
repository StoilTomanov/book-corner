export const CreateForm = () => {
    return (
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
                    <input type="number" name="year" id="year" />
                </div>
                <div className="form-row">
                    <label htmlFor="pages">Pages</label>
                    <input type="text" name="pages" id="pages" />
                </div>
                <div className="form-row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" />
                </div>
                <div className="form-row">
                    <label htmlFor="image">Image Url</label>
                    <input type="text" name="image" id="image" />
                </div>
                <div className="form-row">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" />
                </div>
                <div className='on-sale'>
                    <p>On sale?</p>
                    <label htmlFor="on-sale">
                        <input type="radio" id='on-sale' name='on-sale' value='Yes' />
                        <span>Yes</span>
                    </label>
                    <label htmlFor="on-sale-1">
                        <input type="radio" id='on-sale-1' name='on-sale' value='No' defaultChecked />
                        <span>No</span>
                    </label>
                </div>
                <div className='upcoming'>
                    <p>Upcoming?</p>
                    <label htmlFor="upcoming">
                        <input type="radio" id='upcoming' name='upcoming' value='Yes' />
                        <span>Yes</span>
                    </label>
                    <label htmlFor="upcoming-1">
                        <input type="radio" id='upcoming-1' name='upcoming' value='No' defaultChecked />
                        <span>No</span>
                    </label>
                </div>
                <div className="form-row">
                    <button className="submit-create-btn" type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}