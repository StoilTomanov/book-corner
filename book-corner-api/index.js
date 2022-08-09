const express = require('express');

const apiController = require('./controllers/book-corner-api');
const usersController = require('./controllers/book-corner-users');

const database = require('./models/index');

const cors = require('./middleware/cors');
const auth = require('./middleware/auth');
const serverInfo = {
    serverName: 'Book-Corner-API',
    version: '0.1',
};

initRest();

async function initRest() {
    const app = express();
    const port = 4000;
    await database.initDb();

    app.use(express.json());
    app.use(cors());
    app.use(auth());
    app.use('/api', apiController);
    app.use('/users', usersController);

    app.get('/', (req, res) => res.json(serverInfo));
    app.get('*', (req, res) => res.status(404).json({
        message: 'Not Found'
    }));

    app.listen(port, () => console.log(`Rest server is running on ${port}`));
}