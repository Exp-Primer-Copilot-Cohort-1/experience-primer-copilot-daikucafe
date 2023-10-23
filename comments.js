// Create web server

// Import the necessary modules
const express = require('express');

// Create an instance of Express
const app = express();
const port = 3000; // You can choose any port you prefer

// Define a route for handling GET requests to /comments
app.get('/comments', (req, res) => {
  res.send('This is the comments route!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
