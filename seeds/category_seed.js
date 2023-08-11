const { Category } = require('../models'); // Make sure to import your Category model
// not sure on seed
const categoryData = [
  {
    name: 'Sport',
  },
  {
    name: 'Video Games',
  },
  {
    name: 'Chuck Norris',
  },
 
];

function seedCategories() {
  return Category.bulkCreate(categoryData);
}

module.exports = seedCategories;