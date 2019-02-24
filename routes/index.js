const express = require('express');
const router = express.Router();

/************************************************************************************
Routes
************************************************************************************/
router.get('/', (req, res) => {
    res.send('Homepage');
});
router.get('/about', (req, res) => {
    res.send('about Page');
});

module.exports = router;