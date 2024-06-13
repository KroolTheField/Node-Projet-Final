// controllers/authorController.js
const authorModel = require('../models/authorModel');

const getAllAuthors = (req, res) => {
    const authors = authorModel.getAllAuthors();
    res.json(authors);
};

const getAuthorById = (req, res) => {
    const id = req.params.id;
    const author = authorModel.getAuthorById(id);
    if (author) {
        res.json(author);
    } else {
        res.status(404).json({ message: "Author not found" });
    }
};

const addAuthor = (req, res) => {
    const { name, country } = req.body;
    const newAuthor = {
        id: Date.now().toString(),
        name,
        country
    };
    authorModel.addAuthor(newAuthor);
    res.status(201).json(newAuthor);
};

const updateAuthor = (req, res) => {
    const id = req.params.id;
    const { name, country } = req.body;
    const updatedAuthor = {
        name,
        country
    };
    const success = authorModel.updateAuthor(id, updatedAuthor);
    if (success) {
        res.json(updatedAuthor);
    } else {
        res.status(404).json({ message: "Author not found" });
    }
};

const deleteAuthor = (req, res) => {
    const id = req.params.id;
    authorModel.deleteAuthor(id);
    res.json({ message: "Author deleted successfully" });
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor
};
