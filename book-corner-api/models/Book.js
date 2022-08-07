const { model, Schema, Types: { ObjectId } } = require('mongoose');

const bookSchema = new Schema({
    title: { type: String, required: [true, 'Title is required'] },
    author: { type: String, required: [true, 'Author name is required'] },
    year: { type: Number, required: [true, 'Year is required'] },
    pages: { type: Number, required: [true, 'Pages are required'] },
    price: { type: String, required: [true, 'Price is required'] },
    imageUrl: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' },
    description: { type: String, required: [true, 'Description is required'] },
    sale: { type: Boolean, required: [true, 'You need to choose if the book is on sale'] },
    discount: { type: Number, default: 0 },
    upcoming: { type: Boolean, required: [true, 'You need to choose if the book is in store or upcoming'] },
    upcomingDate: { type: String, default: '' },
    rating: { type: [ObjectId], default: [], ref: 'User' },
    ratingScore: { type: Number, default: 0 },
    bought: { type: [ObjectId], default: [], ref: 'User' },
    quantity: { type: Number, default: 20 },
    comments: { type: [Object], default: [{}] },
    owner: { type: ObjectId, ref: 'User' },
    views: { type: Number, default: 0 },
});

const Book = model('Book', bookSchema);

module.exports = Book;