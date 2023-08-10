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

Team.hasMany(Player, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE'
})

Player.belongsTo(Team, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE'
})

Team.hasOne(Mascot, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE'
})

Mascot.belongsTo(Team, {
    foreignKey: 'team_id',
    onDelete: 'CASCADE'
})



