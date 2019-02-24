const express = require('express');
const router = express.Router();
const data = require('../data.json');


/************************************************************************************
Routes
************************************************************************************/
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/about', (req, res) => {
    res.render('about');
});
router.get('/project',(req, res) => {
    res.render('project', {
        data
    });
});



module.exports = router;