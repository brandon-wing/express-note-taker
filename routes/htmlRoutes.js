const express = require('express');
const app = express();
//allow pathing
const path = require('path');
//set up the router
const router = express.Router();
//simple GET requests to navigate between the HTML pages
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router