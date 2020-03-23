'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    report: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER
  }, {});
  Report.associate = function(models) {
    Report.belongsTo(models.User, { foreignKey : "UserId"})
    Report.belongsTo(models.Country, { foreignKey : "CountryId"})
    // associations can be defined here
  };
  return Report;
};