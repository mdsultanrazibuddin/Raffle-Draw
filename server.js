const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

const simpleLogger = (req, res, next) => {
    console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`);
    next();
};

const secondMiddleWare = (res, req, next) => {
    console.log('I am second middleware');
    next();
};
// Middleware
app.use([simpleLogger, secondMiddleWare]);
// Route
app.get('/hello', (req, res, next) => {
    res.json({ message: 'Hello' });
});

app.get('/', (req, res, next) => {
    res.json({ message: 'Sweet Home' });
});
// listen
app.listen(8000, () => {
    console.log('Application running on port 8000');
});
