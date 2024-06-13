// routes/userRoutes.js
// Routes pour la gestion des utilisateurs

/**
 * @route   GET /users
 * @desc    Récupérer tous les utilisateurs
 * @access  Public
 * @returns {Array} Liste des utilisateurs au format JSON
 */

/**
 * @route   GET /users/:id
 * @desc    Récupérer un utilisateur par son ID
 * @access  Public
 * @param   {string} id - L'ID de l'utilisateur à récupérer
 * @returns {Object} Détails de l'utilisateur au format JSON
 */

/**
 * @route   POST /users
 * @desc    Ajouter un nouvel utilisateur
 * @access  Public
 * @param   {string} name - Nom de l'utilisateur
 * @param   {string} email - Adresse email de l'utilisateur
 * @param   {string} country - Pays de l'utilisateur
 * @returns {Object} Nouvel utilisateur ajouté au format JSON
 */

/**
 * @route   PUT /users/:id
 * @desc    Mettre à jour les informations d'un utilisateur
 * @access  Public
 * @param   {string} id - L'ID de l'utilisateur à mettre à jour
 * @param   {string} name - Nouveau nom de l'utilisateur
 * @param   {string} email - Nouvelle adresse email de l'utilisateur
 * @param   {string} country - Nouveau pays de l'utilisateur
 * @returns {Object} Utilisateur mis à jour au format JSON
 */

/**
 * @route   DELETE /users/:id
 * @desc    Supprimer un utilisateur
 * @access  Public
 * @param   {string} id - L'ID de l'utilisateur à supprimer
 * @returns {string} Message de succès au format JSON
 */

// Routes pour la gestion des emprunts de livres

/**
 * @route   GET /users/:userId/borrowedBooks
 * @desc    Récupérer tous les livres empruntés par un utilisateur
 * @access  Public
 * @param   {string} userId - L'ID de l'utilisateur
 * @returns {Array} Liste des livres empruntés par l'utilisateur au format JSON
 */

/**
 * @route   POST /users/:userId/borrowedBooks
 * @desc    Ajouter un nouvel emprunt de livre pour un utilisateur
 * @access  Public
 * @param   {string} userId - L'ID de l'utilisateur
 * @param   {string} bookId - L'ID du livre emprunté
 * @param   {string} borrowDate - Date d'emprunt du livre (au format YYYY-MM-DD)
 * @param   {string} returnDate - Date de retour prévue du livre (au format YYYY-MM-DD)
 * @returns {Object} Nouvel emprunt de livre ajouté au format JSON
 */

/**
 * @route   DELETE /users/:userId/borrowedBooks/:bookId
 * @desc    Supprimer un emprunt de livre pour un utilisateur
 * @access  Public
 * @param   {string} userId - L'ID de l'utilisateur
 * @param   {string} bookId - L'ID du livre emprunté
 * @returns {string} Message de succès au format JSON
 */


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

