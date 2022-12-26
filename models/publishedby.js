"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PublishedBy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PublishedBy.belongsTo(models.Publisher, {
        foreignKey: "publisherId",
        as: "publisher",
      });
      PublishedBy.belongsTo(models.Books, {
        foreignKey: "booksId",
        as: "book",
      });
    }
  }
  PublishedBy.init(
    {
      publisherId: DataTypes.INTEGER,
      booksId: DataTypes.INTEGER,
      releaseDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "PublishedBy",
    }
  );
  return PublishedBy;
};
