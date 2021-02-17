'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_card_remark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  job_card_remark.init({
    job_card_remark_id: DataTypes.INTEGER,
    job_card_id: DataTypes.INTEGER,
    remark: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'job_card_remark',
  });
  return job_card_remark;
};