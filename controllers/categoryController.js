const CategoryModel = require('../models/categoryModel');
const CategoryDTO=require('../dtos/categoryDTO');


exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.getAllCategories();
    const categoryDTOs=categories.map(category => new CategoryDTO(category));
    res.json(categoryDTOs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.getCategoryById(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const categoryDTO=new CategoryDTO(category)
    res.json(categoryDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createCategory = async (req, res,next) => {
  const { Name } = req.body;
  try {
    const newCategory = await CategoryModel.createCategory(Name);
    const newCategoryDTO=new CategoryDTO(newCategory)
    res.status(201).json(newCategoryDTO);
  } catch (err) {
    next(err)
  }
};

 
exports.updateCategory = async (req, res,next) => {
  //const { id } = req.params;
  const { CategoryId, Name } = req.body;
  try {
    const updatedCategory = await CategoryModel.updateCategory(CategoryId, Name);
    if (!updatedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const updatedCategoryDTO=new CategoryDTO(updatedCategory)
    res.json(updatedCategoryDTO);
  } catch (err) {
    next(err)
  }
};


exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await CategoryModel.deleteCategory(id);
    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    const deletedCategoryDTO=new CategoryDTO(deletedCategory)
    res.json(deletedCategoryDTO);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
