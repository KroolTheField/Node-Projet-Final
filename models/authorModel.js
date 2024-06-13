// models/authorModel.js
const fs = require('fs');
const path = require('path');

const authorsFilePath = path.join(__dirname, '../data/authors.json');

const getAllAuthors = () => {
    try {
        const authorsData = fs.readFileSync(authorsFilePath, 'utf-8');
        return JSON.parse(authorsData);
    } catch (error) {
        console.error('Error reading authors data:', error);
        return [];
    }
};

const getAuthorById = (id) => {
    const authors = getAllAuthors();
    return authors.find(author => author.id === id);
};

const addAuthor = (newAuthor) => {
    try {
        const authors = getAllAuthors();
        authors.push(newAuthor);
        fs.writeFileSync(authorsFilePath, JSON.stringify(authors, null, 2));
        return true;
    } catch (error) {
        console.error('Error adding author:', error);
        return false;
    }
};

const updateAuthor = (id, updatedAuthor) => {
    try {
        const authors = getAllAuthors();
        const index = authors.findIndex(author => author.id === id);
        if (index !== -1) {
            authors[index] = { id, ...updatedAuthor };
            fs.writeFileSync(authorsFilePath, JSON.stringify(authors, null, 2));
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error updating author:', error);
        return false;
    }
};

const deleteAuthor = (id) => {
    try {
        const authors = getAllAuthors();
        const updatedAuthors = authors.filter(author => author.id !== id);
        fs.writeFileSync(authorsFilePath, JSON.stringify(updatedAuthors, null, 2));
        return true;
    } catch (error) {
        console.error('Error deleting author:', error);
        return false;
    }
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor
};
