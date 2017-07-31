"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Boards", [
      {
        name: "Politically Incorrect",
        slug: "pol",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Random",
        slug: "b",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Boards", null, {});
  }
};
