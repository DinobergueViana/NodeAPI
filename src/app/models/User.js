'use-strict';

const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.difine('User',
    {
        email: {
            type: Sequelize.STRING
        },
        password_hash: {
            type: Sequelize.STRING,
        }
    }, { tableName: 'users' }
    );

    return User;
}