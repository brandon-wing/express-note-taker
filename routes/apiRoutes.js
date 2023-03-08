const express = require('express');
const app = express();

//set up the router

const router = express.Router();

//we need fileshare for the notes to be posted to the HTML

const fs = require('fs')
const path = require('path');
//the variable below grabs the db.json file and its contents
const data = require('../db/db.json');
// ALL routes in this file are prefixed with '/api'
router.get('/notes', (req, res) => {
//responds with the content from the db.json
res.json(data);
});



	router.post('/notes', (req, res) => {
		//We need to use our object to add the data. We will use the .push method
		data.push(req.body)
		//we need to incrememnt the ID of each note so that it adds to the JSON instead of replacing the current note
		let noteId = data
		req.body.noteId;
	//couldn't figure out why ../db wasn't working.... writeFile starts from the root folder so only one . is needed!
  //JSON.stringify converts a JavaScript value to a JSON string so that when it is written to db.json, it is formatted correctly.
	fs.writeFile('./db/db.json', JSON.stringify(data), function (err) {
			if (err) throw err;
			console.log("new note added")
		});
    console.log(req.body)
    
    res.json(data)
  
	});

router.delete('/notes/:id', (req, res) => {

})

// this allows to be accessed outsife of this file
module.exports = router;