module.exports = (sequelize, DataTypes) => {
  const Work = sequelize.define("Work", {
    title: DataTypes.STRING,
    deadline: DataTypes.DATEONLY
  });

  return Work;
};
