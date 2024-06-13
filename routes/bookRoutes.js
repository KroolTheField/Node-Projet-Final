// routes/bookRoutes.js
// Routes pour la gestion des livres

/**
 * @route   GET /books
 * @desc    Récupérer tous les livres
 * @access  Public
 * @returns {Array} Liste des livres au format JSON
 */

/**
 * @route   GET /books/:id
 * @desc    Récupérer un livre par son ID
 * @access  Public
 * @param   {string} id - L'ID du livre à récupérer
 * @returns {Object} Détails du livre au format JSON
 */

/**
 * @route   POST /books
 * @desc    Ajouter un nouveau livre
 * @access  Public
 * @param   {string} title - Titre du livre
 * @param   {string} authorId - ID de l'auteur du livre
 * @param   {number} year - Année de publication du livre
 * @returns {Object} Nouveau livre ajouté au format JSON
 */

/**
 * @route   PUT /books/:id
 * @desc    Mettre à jour les informations d'un livre
 * @access  Public
 * @param   {string} id - L'ID du livre à mettre à jour
 * @param   {string} title - Nouveau titre du livre
 * @param   {string} authorId - Nouvel ID de l'auteur du livre
 * @param   {number} year - Nouvelle année de publication du livre
 * @returns {Object} Livre mis à jour au format JSON
 */

/**
 * @route   DELETE /books/:id
 * @desc    Supprimer un livre
 * @access  Public
 * @param   {string} id - L'ID du livre à supprimer
 * @returns {string} Message de succès au format JSON
 */

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Middleware for logging requests
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
