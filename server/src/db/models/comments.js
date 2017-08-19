"use strict";
module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    threadId: DataTypes.INTEGER,
    author: DataTypes.STRING,
    comment: DataTypes.TEXT,
    file: DataTypes.STRING
  });
  Comments.associate = function(models) {
    Comments.belongsTo(models.Threads, {
      foreignKey: "threadId",
      constraints: true,
      as: "threads"
    });
  };
  return Comments;
};
