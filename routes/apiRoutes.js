const express = require('express');
const app = express();
// This single line is equivilent to the two lines above
const router = express.Router();

const path = require('path');

const data = require('../db/db.json');

// ALL routes in this file are prefixed with '/api'
router.get('/notes', (req, res) => {
    console.log("Dataset: ", data);
    console.log("Type: ", typeof data);

    // we send data back to the client
    res.json(JSON.parse(data));
})

router.post('/notes', (req, res) => {
    console.log(req.body);
})


router.delete('/notes', (req, res) => {

})

// this allows to be accessed outsife of this file
module.exports = router;