"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Books.hasMany(models.Member, { foreignKey: "booksId"});
      Books.belongsToMany(models.Publisher, {
        through: models.PublishedBy,
        foreignKey: "booksId",
      });
    }
  }
  Books.init(
    {
      author: DataTypes.STRING,
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      availability: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );
  return Books;
};
