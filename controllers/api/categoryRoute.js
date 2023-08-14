const router = require('express').Router();
const { Category } = require('../../models');

// getting all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ['id', 'name'],
    });

    const categories = categoryData.map((category) => ({
      id: category.id,
      name: category.name,
    }));

    res.json(categories);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching categories' });
  }
});
router.get('/category/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId, {
      attributes: ['id', 'name'],
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error('Error fetching category by ID:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching category' });
  }
});

module.exports = router;
