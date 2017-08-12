"use strict";
module.exports = function(sequelize, DataTypes) {
  var Boards = sequelize.define(
    "Boards",
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING
    },
    { freezeTableName: true }
  );
  Boards.associate = function(models) {
    Boards.hasMany(models.Threads, {
      foreignKey: "boardId",
      constraints: true,
      as: "threads"
    });
  };
  return Boards;
};
