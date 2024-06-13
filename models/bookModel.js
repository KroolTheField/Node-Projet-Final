// models/bookModel.js
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/books.json');

const getAllBooks = () => {
    const booksData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(booksData);
};

const getBookById = (id) => {
    const booksData = getAllBooks();
    return booksData.find(book => book.id === id);
};

const addBook = (book) => {
    const booksData = getAllBooks();
    booksData.push(book);
    fs.writeFileSync(dataFilePath, JSON.stringify(booksData, null, 2));
};

const updateBook = (id, updatedBook) => {
    const booksData = getAllBooks();
    const index = booksData.findIndex(book => book.id === id);
    if (index !== -1) {
        booksData[index] = updatedBook;
        fs.writeFileSync(dataFilePath, JSON.stringify(booksData, null, 2));
        return true;
    }
    return false;
};

const deleteBook = (id) => {
    const booksData = getAllBooks();
    const filteredBooks = booksData.filter(book => book.id !== id);
    fs.writeFileSync(dataFilePath, JSON.stringify(filteredBooks, null, 2));
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};
