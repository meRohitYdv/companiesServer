'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  company_details.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    tags: DataTypes.STRING,
    ceo: DataTypes.STRING,
    cpi: DataTypes.FLOAT,
    cf: DataTypes.FLOAT,
    mau: DataTypes.FLOAT,
    roic: DataTypes.FLOAT,
    score: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'company_details',
  });
  return company_details;
};