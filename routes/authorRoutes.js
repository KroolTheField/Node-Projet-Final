// routes/authorRoutes.js
// Routes pour la gestion des auteurs

/**
 * @route   GET /authors
 * @desc    Récupérer tous les auteurs
 * @access  Public
 * @returns {Array} Liste des auteurs au format JSON
 */

/**
 * @route   GET /authors/:id
 * @desc    Récupérer un auteur par son ID
 * @access  Public
 * @param   {string} id - L'ID de l'auteur à récupérer
 * @returns {Object} Détails de l'auteur au format JSON
 */

/**
 * @route   POST /authors
 * @desc    Ajouter un nouvel auteur
 * @access  Public
 * @param   {string} name - Nom de l'auteur
 * @param   {string} country - Pays de l'auteur
 * @returns {Object} Nouvel auteur ajouté au format JSON
 */

/**
 * @route   PUT /authors/:id
 * @desc    Mettre à jour les informations d'un auteur
 * @access  Public
 * @param   {string} id - L'ID de l'auteur à mettre à jour
 * @param   {string} name - Nouveau nom de l'auteur
 * @param   {string} country - Nouveau pays de l'auteur
 * @returns {Object} Auteur mis à jour au format JSON
 */

/**
 * @route   DELETE /authors/:id
 * @desc    Supprimer un auteur
 * @access  Public
 * @param   {string} id - L'ID de l'auteur à supprimer
 * @returns {string} Message de succès au format JSON
 */

const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Middleware for logging requests
router.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/', authorController.addAuthor);
router.put('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;
