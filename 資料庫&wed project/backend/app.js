var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const products = require('./data/Category.data');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const crownRouter = require('./routes/crown_74.js');
const crown2Router = require('./routes/crown2_74.js');
const crown3Router = require('./routes/crown3_74.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/crown_74', crownRouter);
app.use('/crown2_74', crown2Router);
app.use('/crown3_74', crown3Router);

app.use('/crown3_arr_74', (req, res, next) => {
  res.json(products);
} );

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
