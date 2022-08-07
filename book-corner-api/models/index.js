const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/book-corner';

async function initDb() {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection failed');
        process.exit(1);
    }
}

module.exports = {
    initDb,
}