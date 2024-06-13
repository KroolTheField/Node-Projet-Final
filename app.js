const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const borrowRoutes = require('./routes/borrowRoutes');
const genreRoutes = require('./routes/genreRoutes');
const logMiddleware = require('./middlewares/logMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const path = require('path');

const app = express();

// Connexion à la base de données
connectDB();

// Middlewares
app.use(bodyParser.json());
app.use(logMiddleware);
app.use(authMiddleware);

// Vues EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/borrows', borrowRoutes);
app.use('/api/genres', genreRoutes);

app.get('/debug/books', async (req, res) => {
  const books = await require('./models/book').find().populate('genre');
  res.render('books', { books });
});

app.get('/debug/users', async (req, res) => {
  const users = await require('./models/user').find();
  res.render('users', { users });
});

app.get('/debug/borrows', async (req, res) => {
  const borrows = await require('./models/borrow').find().populate('user').populate('book');
  res.render('borrows', { borrows });
});

app.get('/debug/genres', async (req, res) => {
  const genres = await require('./models/genre').find();
  res.render('genres', { genres });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  