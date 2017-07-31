'use strict';
module.exports = function(sequelize, DataTypes) {
  var Boards = sequelize.define('Boards', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Boards;
};