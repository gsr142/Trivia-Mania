const User = require('./User');
const Player = require('./Player');
const Team = require('./Team');
const Mascot = require('./Mascot');

User.hasMany(Player, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
} )

Player.belongsToMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Mascot, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Mascot.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})


