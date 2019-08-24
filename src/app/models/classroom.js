module.exports = (sequelize, DataTypes) => {
  const Classroom = sequelize.define("Classroom", {
    name: DataTypes.STRING
  });

  return Classroom;
};
