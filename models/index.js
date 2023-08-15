const User = require('./User');
const Category = require('./Category');
const Question = require('./Question');


Category.hasMany(Question, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})

Question.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})


module.exports = {User, Category, Question}; 


