// Imports
const express = require('express');
const path = require('path');
const cors = require('cors');

// import routes
const testRoutes = require('./routes/tests.routes');

const app = express();

app.use(cors());

const server = app.listen('3030', () => {
  console.log('Server is running on port: 3030');
});

app.use(express.static(path.join(__dirname, '/public')))
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')))
app.use(express.urlencoded({ extended: false }));   // x-www-form-urlencoded
app.use(express.json());    // form-data JSON format


app.use('/api', testRoutes); // add test routes to server


app.use((req, res) => {
	res.status(404).json({ message: '404 Not found...' })
})

module.exports = server;