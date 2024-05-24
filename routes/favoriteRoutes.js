const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');


router.get('/', favoriteController.getAllFavorites);


router.get('/:id', favoriteController.getFavoriteById);


router.post('/', favoriteController.createFavorite);


router.put('/', favoriteController.updateFavorite);


router.delete('/:id', favoriteController.deleteFavorite);

module.exports = router;