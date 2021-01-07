'use-strict';

const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password_hash: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }

    }, { tableName: 'users' }
    );

    return User;
}