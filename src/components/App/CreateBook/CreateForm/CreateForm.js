import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBookRecord } from '../../../../services/api-service';

export const CreateForm = () => {
    const navigate = useNavigate();

    const [value, setValue] = useState({
        title: '',
        author: '',
        year: 0,
        pages: 0,
        price: 0,
        imageUrl: '',
        description: '',
        sale: false,
        upcoming: false,
    });

    const changeHandler = (ev) => {
        setValue(state => ({
            ...state,
            [ev.target.name]: ev.target.value,
        }))
    };

    const submitHandler = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = Object.fromEntries(formData);
        data.sale = data.sale === 'No' ? false : true;
        data.upcoming = data.upcoming === 'No' ? false : true;
        data.price = Number(data.price);
        data.year = Number(data.year);
        data.pages = Number(data.pages);
        createBookRecord(data);
        navigate('/catalog');
    };

    return (
        <div className="form">
            <form className="create-form" onSubmit={submitHandler}>
                <div className="form-row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={value.title} onChange={changeHandler}/>
                </div>
                <div className="form-row">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" id="author" value={value.author} onChange={changeHandler}/>
                </div>
                <div className="form-row">
                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" id="year" value={value.year} onChange={changeHandler}/>
                </div>
                <div className="form-row">
                    <label htmlFor="pages">Pages</label>
                    <input type="number" name="pages" id="pages" value={value.pages} onChange={changeHandler}/>
                </div>
                <div className="form-row">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" value={value.price} onChange={changeHandler}/>
                </div>
                <div className="form-row">
                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" name="imageUrl" id="imageUrl" value={value.imageUrl} onChange={changeHandler}/>
                </div>
                <div className="form-row">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" value={value.description} onChange={changeHandler}/>
                </div>
                <div className='sale'>
                    <p>On sale?</p>
                    <label htmlFor="sale">
                        <input type="radio" id='sale' name='sale' value='Yes' onChange={changeHandler} checked={value.sale === 'Yes'} />
                        <span>Yes</span>
                    </label>
                    <label htmlFor="sale-1">
                        <input type="radio" id='sale-1' name='sale' value='No' onChange={changeHandler} checked={value.sale === 'No'} />
                        <span>No</span>
                    </label>
                </div>
                <div className='upcoming'>
                    <p>Upcoming?</p>
                    <label htmlFor="upcoming">
                        <input type="radio" id='upcoming' name='upcoming' value='Yes' onChange={changeHandler} checked={value.upcoming === 'Yes'} />
                        <span>Yes</span>
                    </label>
                    <label htmlFor="upcoming-1">
                        <input type="radio" id='upcoming-1' name='upcoming' value='No' onChange={changeHandler} checked={value.upcoming === 'No'} />
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