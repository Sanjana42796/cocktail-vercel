import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;

// Set the view engine to EJS for rendering HTML
app.set('view engine', 'ejs');
app.use(express.static('public')); // for static files like CSS

// Homepage route
app.get('/', async (req, res) => {
  try {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await axios.get(apiUrl);
    const cocktail = response.data.drinks[0];

    res.render('index', { cocktail });
  } catch (error) {
    console.error('Error fetching data from CocktailDB:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:${port}");
});