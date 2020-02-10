const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mupOtac = require('./routes/otac.mup');
const mupMajka = require('./routes/majka.mup');
const mulsOtac = require('./routes/otac.muls');
const mulsMajka = require('./routes/majka.muls');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/mup/majka',mupMajka);
app.use('/mup/otac', mupOtac);
app.use('/muls/majka', mulsMajka);
app.use('/muls/otac', mulsOtac);

app.listen(process.env.PORT || 5000, console.log('Appp is running on 5000 port'))

module.exports = app;
