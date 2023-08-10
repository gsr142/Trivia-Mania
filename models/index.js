const User = require('./User');
const Player = require('./Player');
const Mascot = require('./Mascot');

User.hasMany(Player, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
} )

Player.belongsToMany(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasOne(Mascot, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Mascot.hasMany(Player, {
    foreignKey: 'mascot_id',
    onDelete: 'CASCADE'
})

Player.belongsTo(Mascot, {
    foreignKey: 'mascot_id',
    onDelete: 'CASCADE'
})




