const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


/************************************************************************************
Routes
************************************************************************************/
// Start page
router.get('/', (req, res) => {
    res.render('index', {
        projects
    });
});

// About page
router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;