//const express = require('express');
const { uuid } = require('uuidv4');
//const app = express();

//set up the router

//const router = express.Router();
const router = require("express").Router();

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

		console.log("Req Body Data: ", req.body);
		console.log("Req Body Type: ", typeof req.body);  // --> object { title: "value", text: "value"}

		// Maybe we can also add addtiona fields to our OBJECT  --> { id: "" }
		//let tempId = uuid();
		
		let newNote = {
			id: uuid(),
			title: req.body.title,
			text: req.body.text
		} 
		
		console.log("new Note: ", newNote);

		console.log("Data: ", data)
		console.log("Data Type: ", typeof data)

		//We need to use our object to add the data. We will use the .push method
		data.push(newNote)
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
	// console.log("Req Parameters: ", req.params);

	//define the id as a const
	const id = req.params;
	console.log(id)

	res.json(data)
})

// this allows to be accessed outsife of this file
module.exports = router;