# API de Gestion de Bibliothèque

Cette API permet de gérer les utilisateurs, les auteurs, les livres et les livres empruntés dans une bibliothèque.

## Prérequis

- Node.js installé sur le système.
- Un éditeur de code.
- Un terminal pour exécuter des commandes.

## Installation

1. Clonez le repository GitHub :

    ```bash
    git clone https://github.com/votre_utilisateur/api-bibliotheque.git
    ```

2. Installez les dépendances avec la commande suivante :

    ```bash
    npm install
    ```

3. Configurez les variables d'environnement si nécessaire en créant un fichier `.env` à la racine du projet et en y spécifiant les variables d'environnement nécessaires, telles que le port d'écoute de l'API.

4. Lancez l'API avec la commande :

    ```bash
    npm start
    ```

    L'API sera disponible à l'adresse `http://localhost:3000` par défaut.

## Endpoints

### Utilisateurs (Users)

- `GET /users` : Récupérer tous les utilisateurs.
- `GET /users/:id` : Récupérer un utilisateur par son ID.
- `POST /users` : Ajouter un nouvel utilisateur.
- `PUT /users/:id` : Mettre à jour un utilisateur.
- `DELETE /users/:id` : Supprimer un utilisateur.

### Auteurs (Authors)

- `GET /authors` : Récupérer tous les auteurs.
- `GET /authors/:id` : Récupérer un auteur par son ID.
- `POST /authors` : Ajouter un nouvel auteur.
- `PUT /authors/:id` : Mettre à jour un auteur.
- `DELETE /authors/:id` : Supprimer un auteur.

### Livres (Books)

- `GET /books` : Récupérer tous les livres.
- `GET /books/:id` : Récupérer un livre par son ID.
- `POST /books` : Ajouter un nouveau livre.
- `PUT /books/:id` : Mettre à jour un livre.
- `DELETE /books/:id` : Supprimer un livre.

### Livres empruntés (Borrowed Books)

- `GET /users/:userId/borrowedBooks` : Récupérer tous les livres empruntés par un utilisateur.
- `POST /users/:userId/borrowedBooks` : Ajouter un nouveau livre emprunté pour un utilisateur.
- `PUT /users/:userId/borrowedBooks/:bookId` : Mettre à jour un livre emprunté par un utilisateur.
- `DELETE /users/:userId/borrowedBooks/:bookId` : Supprimer un livre emprunté par un utilisateur.

## Erreurs

En cas d'erreur, l'API renvoie les codes d'erreur HTTP appropriés ainsi que les messages d'erreur correspondants.

- 400 Bad Request : Requête invalide ou incomplète.
- 404 Not Found : Ressource non trouvée.
- 500 Internal Server Error : Erreur interne du serveur.

## Licence

Ce projet est sous licence [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).
