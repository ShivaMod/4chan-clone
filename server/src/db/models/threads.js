"use strict";
module.exports = function(sequelize, DataTypes) {
  var Threads = sequelize.define("Threads", {
    boardId: DataTypes.INTEGER,
    subject: DataTypes.STRING,
    author: DataTypes.STRING,
    comment: DataTypes.TEXT,
    file: DataTypes.STRING
  });
  Threads.associate = function(models) {
    Threads.belongsTo(models.Boards, {
      foreignKey: "boardId",
      constraints: true,
      as: "boards"
    });
  };
  return Threads;
};
