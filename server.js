const express = require('express');
const path = require('path');
const fs = require('fs');
// we create an INSTANCE of our APP (SERVER)
const app = express();


const apiRoutes = require('./routes/routes.js')
const PORT = 3001;

// Middlewear Setup
// These two lines PARSE the incoming REQUEST 
app.use(express.json());
app.use(express.urlencoded({extended: true }))


app.use('/api', apiRoutes);


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);