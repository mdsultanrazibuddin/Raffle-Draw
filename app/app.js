require('dotenv').config()

const express = require ('express')


const app = express ()

app.use(require('./middleware'));
app.use(require('./route'))

// console.log(process.env);


app.use((_req, _res, next) => {
    const error = new Error('Resource not found');
    error.status = 404;
    next(error);
});

app.use((error, _req, res, _next) => {
    if (error.status) {
        res.status(error.status).json({
            message: error.message,
        });
    }

    res.status(500).json({ message: 'Something went wrong' });
});

module.exports = app 