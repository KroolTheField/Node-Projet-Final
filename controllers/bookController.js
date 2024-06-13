// controllers/bookController.js
const bookModel = require('../models/bookModel');
const authorModel = require('../models/authorModel');

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
    const { title, authorId, year } = req.body;
    const author = authorModel.getAuthorById(authorId);
    if (!author) {
        return res.status(400).json({ message: "Author not found" });
    }
    const newBook = {
        id: Date.now().toString(),
        title,
        authorId,
        author: author.name, // Ajout du nom de l'auteur pour une meilleure lisibilité
        year
    };
    bookModel.addBook(newBook);
    res.status(201).json(newBook);
};

const updateBook = (req, res) => {
    const id = req.params.id;
    const { title, authorId, year } = req.body;
    const author = authorModel.getAuthorById(authorId);
    if (!author) {
        return res.status(400).json({ message: "Author not found" });
    }
    const updatedBook = {
        title,
        authorId,
        author: author.name,
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
