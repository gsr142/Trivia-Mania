const sequelize = require('../config/connection');
const { User, Category, Question } = require('../models');

const userData = require('./user_seed');
const questionData = require('./question_seed');
const categoryData = require('./category_seed');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    await Category.bulkCreate(categoryData);

    await Question.bulkCreate(questionData);
    process.exit(0);
};

seedDatabase();