const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const dadRouter = require('./routes/otac');
const momRouter = require('./routes/majka');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/majka', momRouter);
app.use('/otac', dadRouter);

app.listen(5000, console.log('Appp is running on 5000 port'))

module.exports = app;
