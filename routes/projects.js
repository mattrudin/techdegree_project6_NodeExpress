const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/************************************************************************************
Routes
************************************************************************************/
// Custom project page
router.get('/:id',(req, res,next) => {
    const id = req.params.id;

    // If the project does not exist, thow a 404 error
    if(projects[id] === undefined) {
        const err = new Error('Page Not Found');
        err.status = 404;
        console.log(`${err}: ${err.status}`);
        return next(err);
    }

    // If the project exist, display it with the pug layout
    res.render('project', {
        project: projects[id]
    });
});


module.exports = router;