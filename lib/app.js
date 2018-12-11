require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
//const helmet = require('helmet');
const errorHandler = require('./_helpers/errorHandler');
const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(helmet());
app.use(cors());
app.use('/', routes);
app.use(errorHandler)

app.use((req, res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: error.status || process.env.debug === 'true' ? error.message : 'Internal Server Error!',
    });
});

module.exports = app;