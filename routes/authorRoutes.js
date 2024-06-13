// routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Middleware for logging requests
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/', authorController.addAuthor);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
