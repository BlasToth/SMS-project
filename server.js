// Imports
const express = require('express');
const app = express();
const port = 3000;

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));

// Set Templating Engine
app.set('view-engine', 'ejs');

// Navigation
app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'JonNieve' })
})

// Listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`));