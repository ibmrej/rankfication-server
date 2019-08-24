module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    classroomId: DataTypes.INTEGER
  });

  return Student;
};
