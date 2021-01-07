'use strict';

const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', 
      [
        {email: "user1@mail.com", password_hash: bcrypt.hashSync("12e456", 10), createdAt: "2021-01-07", updatedAt: "2021-01-07"},
        {email: "user2@mail.com", password_hash: bcrypt.hashSync("12d456", 10), createdAt: "2021-01-07", updatedAt: "2021-01-07"},
        {email: "user3@mail.com", password_hash: bcrypt.hashSync("12c456", 10), createdAt: "2021-01-07", updatedAt: "2021-01-07"}
      ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
