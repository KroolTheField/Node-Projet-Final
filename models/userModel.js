// models/userModel.js
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const getAllUsers = () => {
    try {
        const usersData = fs.readFileSync(usersFilePath, 'utf-8');
        return JSON.parse(usersData);
    } catch (error) {
        console.error('Error reading users data:', error);
        return [];
    }
};

const getUserById = (id) => {
    const users = getAllUsers();
    return users.find(user => user.id === id);
};

const addUser = (newUser) => {
    try {
        const users = getAllUsers();
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        return true;
    } catch (error) {
        console.error('Error adding user:', error);
        return false;
    }
};

const updateUser = (id, updatedUser) => {
    try {
        const users = getAllUsers();
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = { id, ...updatedUser };
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error updating user:', error);
        return false;
    }
};

const deleteUser = (id) => {
    try {
        const users = getAllUsers();
        const updatedUsers = users.filter(user => user.id !== id);
        fs.writeFileSync(usersFilePath, JSON.stringify(updatedUsers, null, 2));
        return true;
    } catch (error) {
        console.error('Error deleting user:', error);
        return false;
    }
};

const addBorrowedBook = (userId, newBorrowedBook) => {
    try {
        const users = getAllUsers();
        const user = users.find(user => user.id === userId);
        if (user) {
            user.borrowedBooks.push(newBorrowedBook);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error adding borrowed book:', error);
        return false;
    }
};

const getBorrowedBooks = (userId) => {
    const user = getUserById(userId);
    if (user) {
        return user.borrowedBooks;
    }
    return [];
};

const updateBorrowedBook = (userId, bookId, updatedBorrowedBook) => {
    try {
        const users = getAllUsers();
        const user = users.find(user => user.id === userId);
        if (user) {
            const borrowedBooks = user.borrowedBooks;
            const index = borrowedBooks.findIndex(book => book.bookId === bookId);
            if (index !== -1) {
                borrowedBooks[index] = { ...borrowedBooks[index], ...updatedBorrowedBook };
                fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
                return true;
            }
        }
        return false;
    } catch (error) {
        console.error('Error updating borrowed book:', error);
        return false;
    }
};

const deleteBorrowedBook = (userId, bookId) => {
    try {
        const users = getAllUsers();
        const user = users.find(user => user.id === userId);
        if (user) {
            user.borrowedBooks = user.borrowedBooks.filter(book => book.bookId !== bookId);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error deleting borrowed book:', error);
        return false;
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
