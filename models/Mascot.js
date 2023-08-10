const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Mascot extends Model {};

Mascot.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        signature_move: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        team_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mascot',
    }
);