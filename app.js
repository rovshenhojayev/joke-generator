const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Route to fetch and display a joke
app.get('/', async (req, res) => {
  try {
    // Fetch a random joke from JokeAPI
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
    const joke = response.data;

    // Render the joke on the index.ejs page
    res.render('index', { joke });
  } catch (error) {
    console.error('Error fetching joke:', error);
    res.status(500).send('Error fetching joke. Please try again later.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
