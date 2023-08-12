const User = require('./User');
const Category = require('./Category');
const Question = require('./Question');
const Leaderboard = require('./Leaderboard');

Category.hasMany(Question, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})

Question.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
})

Leaderboard.hasMany(User, {
    foreignKey: 'user_id',
})

User.belongsTo(Leaderboard, {
    foreignKey: 'user_id',
})

Leaderboard.hasMany(Category, {
    foreignKey: 'category_id',
})

Category.belongsTo(Leaderboard, {
    foreignKey: 'category_id',
})

module.exports = { User, Category, Question, Leaderboard}; 


