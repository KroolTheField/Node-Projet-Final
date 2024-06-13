// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes pour les utilisateurs
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Routes pour les emprunts de livres des utilisateurs
router.post('/:id/borrowedBooks', userController.addBorrowedBook);
router.get('/:id/borrowedBooks', userController.getBorrowedBooks);
router.put('/:userId/borrowedBooks/:bookId', userController.updateBorrowedBook);
router.delete('/:userId/borrowedBooks/:bookId', userController.deleteBorrowedBook);

module.exports = router;
