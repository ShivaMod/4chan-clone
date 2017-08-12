"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Threads", [
      {
        boardId: 1,
        subject: "First /pol/ thread !",
        author: "HappyZombies",
        comment: "Here is my comment, pretty neat.",
        file: "https://s.4cdn.org/image/fp/logo-transparent.png", // TODO: Change this.
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Threads", null, {});
  }
};
