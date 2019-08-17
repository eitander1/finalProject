'use strict';
module.exports = (sequelize, DataTypes) => {
  const Link = sequelize.define('Link', {
    url: DataTypes.STRING,
  //  likes: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Link.associate = function(models) {
    //Link.belongsTo(models.User);
    Link.belongsToMany(models.User,{through:models.LinkUser})  };
  return Link;
};