const { Category } = require('../models');

const createNewCategory = async (name) => {
  const category = await Category.create({ name });
  return { type: null, message: category };
};

const findAllCategories = async () => {
  const categories = await Category.findAll();
  return { type: null, message: categories };
};

module.exports = {
  createNewCategory,
  findAllCategories,
};