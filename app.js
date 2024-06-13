// app.js
const express = require('express');
const app = express();
const fs = require('fs');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const userRoutes = require('./routes/userRoutes');

// Définir EJS comme moteur de modèle par défaut
app.set('view engine', 'ejs');

app.use(express.json());

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Book routes
app.use('/books', bookRoutes);

// Author routes
app.use('/authors', authorRoutes);

// User routes
app.use('/users', userRoutes);

// Route for debug view
app.get('/debug', (req, res) => {
    // Read data from JSON files
    const users = JSON.parse(fs.readFileSync('./data/users.json'));
    const books = JSON.parse(fs.readFileSync('./data/books.json'));
    const authors = JSON.parse(fs.readFileSync('./data/authors.json'));
    // Extract borrowed books from users
    const borrowedBooks = users.flatMap(user => user.borrowedBooks || []); // Assuming borrowed books are stored under 'borrowedBooks' key in each user object
    // Render debug view
    res.render('debug', { users, books, authors, borrowedBooks }); // Fournir les données des livres empruntés à la vue
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
