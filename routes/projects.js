const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/************************************************************************************
Routes
************************************************************************************/
router.get('/:id',(req, res) => {
    const id = req.params.id;
    res.render('project', {
        project: projects[id]
    });
});


module.exports = router;