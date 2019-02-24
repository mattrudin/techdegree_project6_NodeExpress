/************************************************************************************
Require functions
************************************************************************************/
const express = require('express');
const app = express();
const routes = require('./routes');

/************************************************************************************
Configuration
set and use functions
************************************************************************************/
//Uses the public and images folder for static files
app.use('/static', express.static('public'));
app.use('/images', express.static('images'));

//Sets the view engine to pug
app.set('view engine', 'pug');

/************************************************************************************
Implementing routes (located in ./routes)
************************************************************************************/
app.use(routes);

/************************************************************************************
Error handling
************************************************************************************/
//If route does not exist, generate a 404 error
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

//EXTRA CREDIT: Handle errors with pug template
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status)
    res.render('error');
})

/************************************************************************************
Server setup
************************************************************************************/
app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});