// models/bookModel.js
const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');

const getAllBooks = () => {
    try {
        const booksData = fs.readFileSync(booksFilePath, 'utf-8');
        return JSON.parse(booksData);
    } catch (error) {
        console.error('Error reading books data:', error);
        return [];
    }
};

const getBookById = (id) => {
    const books = getAllBooks();
    return books.find(book => book.id === id);
};

const addBook = (newBook) => {
    try {
        const books = getAllBooks();
        books.push(newBook);
        fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
        return true;
    } catch (error) {
        console.error('Error adding book:', error);
        return false;
    }
};

const updateBook = (id, updatedBook) => {
    try {
        const books = getAllBooks();
        const index = books.findIndex(book => book.id === id);
        if (index !== -1) {
            books[index] = { id, ...updatedBook };
            fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error updating book:', error);
        return false;
    }
};

const deleteBook = (id) => {
    try {
        const books = getAllBooks();
        const updatedBooks = books.filter(book => book.id !== id);
        fs.writeFileSync(booksFilePath, JSON.stringify(updatedBooks, null, 2));
        return true;
    } catch (error) {
        console.error('Error deleting book:', error);
        return false;
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};
