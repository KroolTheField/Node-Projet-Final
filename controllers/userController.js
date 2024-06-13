// controllers/userController.js
const userModel = require('../models/userModel');

const getAllUsers = (req, res) => {
    const users = userModel.getAllUsers();
    res.json(users);
};

const getUserById = (req, res) => {
    const id = req.params.id;
    const user = userModel.getUserById(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

const addUser = (req, res) => {
    const { name, email, country } = req.body;
    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        country,
        borrowedBooks: [] // Liste initiale d'emprunts de livres vide
    };
    userModel.addUser(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email, country } = req.body;
    const updatedUser = {
        name,
        email,
        country
    };
    const success = userModel.updateUser(id, updatedUser);
    if (success) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    userModel.deleteUser(id);
    res.json({ message: "User deleted successfully" });
};

const addBorrowedBook = (req, res) => {
    const userId = req.params.id;
    const { bookId, borrowDate, returnDate } = req.body;
    const newBorrowedBook = {
        bookId,
        borrowDate,
        returnDate
    };
    const success = userModel.addBorrowedBook(userId, newBorrowedBook);
    if (success) {
        res.status(201).json(newBorrowedBook);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

const getBorrowedBooks = (req, res) => {
    const userId = req.params.id;
    const borrowedBooks = userModel.getBorrowedBooks(userId);
    res.json(borrowedBooks);
};

const updateBorrowedBook = (req, res) => {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    const { borrowDate, returnDate } = req.body;
    const updatedBorrowedBook = {
        borrowDate,
        returnDate
    };
    const success = userModel.updateBorrowedBook(userId, bookId, updatedBorrowedBook);
    if (success) {
        res.json(updatedBorrowedBook);
    } else {
        res.status(404).json({ message: "User or borrowed book not found" });
    }
};

const deleteBorrowedBook = (req, res) => {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    const success = userModel.deleteBorrowedBook(userId, bookId);
    if (success) {
        res.json({ message: "Borrowed book deleted successfully" });
    } else {
        res.status(404).json({ message: "User or borrowed book not found" });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addBorrowedBook,
    getBorrowedBooks,
    updateBorrowedBook,
    deleteBorrowedBook
};
