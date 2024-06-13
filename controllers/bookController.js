// controllers/bookController.js
const bookModel = require('../models/bookModel');

const getAllBooks = (req, res) => {
    const books = bookModel.getAllBooks();
    res.json(books);
};

const getBookById = (req, res) => {
    const id = req.params.id;
    const book = bookModel.getBookById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

const addBook = (req, res) => {
    const { title, author, year } = req.body;
    const newBook = {
        id: Date.now().toString(),
        title,
        author,
        year
    };
    bookModel.addBook(newBook);
    res.status(201).json(newBook);
};

const updateBook = (req, res) => {
    const id = req.params.id;
    const { title, author, year } = req.body;
    const updatedBook = {
        id,
        title,
        author,
        year
    };
    const success = bookModel.updateBook(id, updatedBook);
    if (success) {
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};

const deleteBook = (req, res) => {
    const id = req.params.id;
    bookModel.deleteBook(id);
    res.json({ message: "Book deleted successfully" });
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};
