import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBookRecord } from '../../../../services/api-service';

export const CreateForm = () => {
    const navigate = useNavigate();

    const [toggleSale, setToggleSale] = useState();
    const [toggleUpcoming, setToggleUpcoming] = useState();
    const [value, setValue] = useState({
        title: '',
        author: '',
        year: 0,
        pages: 0,
        price: 0,
        imageUrl: '',
        description: '',
        sale: 'No',
        discount: 0,
        upcoming: 'No',
        upcomingDate: '',
    });

    const changeHandler = (ev) => {
        setValue(state => ({
            ...state,
            [ev.target.name]: ev.target.value,
        }))
    };

    const checkRadioButton = (ev) => {
        if(ev.target.name === 'sale'){
            if(ev.target.value === 'Yes') {
                setToggleSale(state => state = true);
            } else {
                setToggleSale(state => state = false);
            }
        } else if(ev.target.name === 'upcoming'){
            if(ev.target.value === 'Yes') {
                setToggleUpcoming(state => state = true);
            } else {
                setToggleUpcoming(state => state = false);
            }
        }
    }

    const submitHandler = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = Object.fromEntries(formData);
        data.sale = data.sale === 'No' ? false : true;
        data.upcoming = data.upcoming === 'No' ? false : true;
        data.price = Number(data.price);
        data.year = Number(data.year);
        data.pages = Number(data.pages);
        data.discount = Number(data.discount);
        console.log(data);
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
                        <input type="radio" id='sale' name='sale' value='Yes' onClick={checkRadioButton} onChange={changeHandler} checked={value.sale === 'Yes'} />
                        <span>Yes</span>
                    </label>
                    <label htmlFor="sale-1">
                        <input type="radio" id='sale-1' name='sale' value='No' onClick={checkRadioButton} onChange={changeHandler} checked={value.sale === 'No'} />
                        <span>No</span>
                    </label>
                </div>
                {toggleSale === true &&
                <div className="form-row">
                    <label htmlFor="discount">Discount</label>
                    <input type="number" name="discount" id="discount" value={value.discount} onChange={changeHandler}/>
                </div>}
                <div className='upcoming'>
                    <p>Upcoming?</p>
                    <label htmlFor="upcoming">
                        <input type="radio" id='upcoming' name='upcoming' value='Yes' onClick={checkRadioButton} onChange={changeHandler} checked={value.upcoming === 'Yes'} />
                        <span>Yes</span>
                    </label>
                    <label htmlFor="upcoming-1">
                        <input type="radio" id='upcoming-1' name='upcoming' value='No' onClick={checkRadioButton} onChange={changeHandler} checked={value.upcoming === 'No'} />
                        <span>No</span>
                    </label>
                </div>
                {toggleUpcoming === true &&
                <div className="form-row">
                    <label htmlFor="upcomingDate">Upcoming Date</label>
                    <input type="date" name="upcomingDate" id="upcomingDate" value={value.upcomingDate} onChange={changeHandler}/>
                </div>}
                <div className="form-row">
                    <button className="submit-create-btn" type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}