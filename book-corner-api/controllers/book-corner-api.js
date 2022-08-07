const router = require('express').Router();
const errorMapper = require('../utils/errorMapper');
const bookServices = require('../services/api');
const { isLogged } = require( '../middleware/guards' );

router.get('/:filter', async(req, res) => {
    const filter = req.params.filter;
    await apiRequestHandler(res, 'GET', null, null, 200, filter, null);
});

router.get('/catalog/:id', async(req, res) => {
    const bookId = req.params.id;
    await apiRequestHandler(res, 'GET', null, bookId, 200, null, null);
});

router.post('/', isLogged(), async(req, res) => {
    const book = {
        "title": req.body.title,
        "author": req.body.author,
        "year": req.body.year,
        "pages": req.body.pages,
        "price": req.body.price,
        "imageUrl": req.body.imageUrl,
        "description": req.body.description,
        "sale": req.body.sale,
        "discount": req.body?.discount,
        "upcomingDate": req.body?.upcomingDate,
        "upcoming": req.body.upcoming,
    }
    await apiRequestHandler(res, 'POST', book, null, 201, null, null);
});

router.put('/:id', isLogged(), async(req, res) => {
    const bookId = req.params.id;
    const book = {
        "title": req.body.title,
        "author": req.body.author,
        "year": req.body.year,
        "pages": req.body.pages,
        "price": req.body.price,
        "imageUrl": req.body.imageUrl,
        "description": req.body.description,
        "sale": req.body.sale,
        "upcoming": req.body.upcoming,
    }
    await apiRequestHandler(res, 'PUT', book, bookId, 201, null, null);
});

router.patch('/comments/:id', isLogged(), async(req, res) => {
    const bookId = req.params.id;
    const userId = req.user._id;
    const commentData = {
        "username": req.body.username,
        "comment": req.body.comment,
        "rating": req.body.rating,
    }
    await apiRequestHandler(res, 'PATCH', commentData, bookId, 200, null, userId);
});

router.delete('/:id', isLogged(), async(req, res) => {
    const bookId = req.params.id;
    await apiRequestHandler(res, 'DELETE', null, bookId, 204, null, null);
});

router.delete('/', async(req, res) => {
    await apiRequestHandler(res, 'DELETE', null, null, 204, null, null);
});

async function apiRequestHandler(res, method, bookData, bookId, statusCode, filter, userId) {
    try {
        let result;
        switch (method) {
            case 'GET':
                if (bookId) {
                    result = await bookServices.getById(bookId);
                } else {
                    if(filter !== null) {
                        result = await bookServices.getAll(filter);
                    }
                }
                break;
            case 'POST':
                result = await bookServices.create(bookData);
                break;
            case 'PUT':
                result = await bookServices.update(bookData, bookId);
                break;
            case 'PATCH':
                result = await bookServices.updateComment(bookData, bookId, userId);
                break;
            case 'DELETE':
                if(bookId){
                    result = await bookServices.deleteById(bookId);
                } else {
                    result = await bookServices.deleteAllBooks();
                }
                break;
            default:
                console.error('Method unknown');
        }
        res.status(statusCode).json(result);
    } catch (error) {
        console.error(error.message);
        const mappedError = errorMapper(error);
        res.status(400).json({ message: mappedError });
    }
}

module.exports = router;