"use strict";

module.exports = {
  up: queryInterface => {
    let queryData = [];

    let subjects = [
      "Artes",
      "Biologia",
      "Educação Física",
      "Espanhol",
      "Filosofia",
      "Física",
      "Geografia",
      "História",
      "Inglês",
      "Literatura",
      "Matemática",
      "Português",
      "Química"
    ];

    for (let i = 0; i < subjects.length; i++) {
      const seed = {
        name: subjects[i],
        createdAt: new Date(),
        updatedAt: new Date()
      };

      queryData.push(seed);
    }

    return queryInterface.bulkInsert("Classrooms", queryData);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Classrooms", null, {});
  }
};
