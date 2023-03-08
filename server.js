const express = require('express');
const path = require('path');
const fs = require('fs');
// we create an INSTANCE of our APP (SERVER)
const app = express();
//access to the routes
const htmlRoutes = require('./routes/htmlRoutes.js')
const apiRoutes = require('./routes/apiRoutes.js')
const PORT = 3001;

// Middlewear Setup
// These two lines PARSE the incoming REQUEST 

app.use(express.json());
app.use(express.urlencoded({extended: true }))
//this fixed the MIME error on loading the styles on the notes index.
app.use(express.static('public'))

//uses the apiRoutes.js file and makes sure all the requests in the apiRoutes folder begin with '/api'
app.use('/api', apiRoutes);
//uses the htmlRoutes.js file
app.use(htmlRoutes);

//log to show user which port the app is listening on
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

