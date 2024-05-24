const favoriteModel = require('../models/favoriteModel');
const FavoriteDTO=require('../dtos/favoriteDTO');


exports.getAllFavorites = async (req, res) => {
  try {
    const favorites = await favoriteModel.getAllFavorites();
    const favoriteDTOs=favorites.map(favorite => new FavoriteDTO(favorite));
    res.json(favoriteDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getFavoriteById = async (req, res) => {
  const { id } = req.params;
  try {
    const favorite = await favoriteModel.getFavoriteById(id);
    if (!favorite) {
      return res.status(404).json({ error: 'Favorite not found' });
    }
    const favoriteDTO=new FavoriteDTO(favorite);
    res.json(favoriteDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createFavorite = async (req, res) => {
  const { DocumentId, UserId } = req.body;
  try {
    const newFavorite = await favoriteModel.createFavorite(DocumentId, UserId);
    const newFavoriteDTO=new FavoriteDTO(newFavorite);
    res.status(201).json(newFavoriteDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateFavorite = async (req, res) => {
  
  const {FavoriteId,DocumentId, UserId } = req.body;
  try {
    const updatedFavorite = await favoriteModel.updateFavorite(FavoriteId,DocumentId, UserId);
    if (!updatedFavorite) {
      return res.status(404).json({ error: 'Favorite not found' });
    }
    const updatedFavoriteDTO=new FavoriteDTO(updatedFavorite);
    res.json(updatedFavoriteDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteFavorite = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFavorite = await favoriteModel.deleteFavorite(id);
    if (!deletedFavorite) {
      return res.status(404).json({ error: 'Favorite not found' });
    }
    const deletedFavoriteDTO=new FavoriteDTO(deletedFavorite);
    res.json(deletedFavoriteDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
