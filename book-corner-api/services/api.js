const Book = require('../models/Book');

async function getAll(filter) {
    if (filter === 'sale') {
        const result = await Book.find({sale: true});
        return result;
    } else if (filter === 'upcoming') {
        const result = await Book.find({upcoming: true});
        return result;
    } else if (filter === 'catalog'){
        const result = await Book.find({sale: false, upcoming: false});
        return result;
    }
}

async function create(book) {
    const result = new Book(book);
    await result.save();
    return result;
}

async function update(book, id) {
    const result = await Book.findById({ _id: id });
    result.title = book.title;
    result.author = book.author;
    result.year = book.year;
    result.pages = book.pages;
    result.price = book.price;
    result.description = book.description;
    result.imageUrl = book.imageUrl;
    result.sale = book.sale;
    result.upcoming = book.upcoming;
    await result.save();
    return result;
}

async function updateComment(data, bookId, userId) {
    const result = await Book.findById({ _id: bookId });
    result.comments.push({
        'comment_id': Math.ceil(Math.random() * 4783745925287),
        'username': data.username,
        'comment': data.comment,
        'rating': data.rating,
    });
    result.rating.push(userId);
    result.ratingScore = Number(result.ratingScore) + Number(data.rating);

    await result.save();
    return result;
}

async function getById(bookId) {
    const result = await Book.findById({ _id: bookId }).lean();
    return result;
}

async function deleteById(id) {
    const result = await Book.findOneAndDelete({ _id: id });
    return result;
}

async function deleteAllBooks() {
    const result = await Book.remove();
    return result;
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    updateComment,
    deleteById,
    deleteAllBooks,
}