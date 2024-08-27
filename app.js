const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
    const joke = response.data;
    res.render('index', { joke });
  } catch (error) {
    console.error('Error fetching joke:', error);
    res.status(500).send('Error fetching joke. Please try again later.');
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
