'use strict';
module.exports = (sequelize, DataTypes) => {
  const LinkUser = sequelize.define('LinkUser', {
    LinkId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  LinkUser.associate = function(models) {
  //  LinkUser.belongsTo(models.User, {foreignKey: 'userId'})
   // LinkUser.belongsTo(models.Link, {foreignKey: 'linkId'})
  };
  return LinkUser;
};