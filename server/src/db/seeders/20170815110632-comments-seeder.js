"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Comments", [
      {
        threadId: 1,
        author: "Some User",
        comment: "This is my comment...cool",
        file: "https://s.4cdn.org/image/fp/logo-transparent.png", // TODO: Change this.
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        threadId: 1,
        author: "Anonymous",
        comment: "This is a comment...I don't have a author nor a file!",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};
