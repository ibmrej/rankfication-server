"use strict";

const faker = require("faker");

faker.locale = "pt_BR";

module.exports = {
  up: queryInterface => {
    let queryData = [];

    for (let i = 0; i < 100; i++) {
      const seed = {
        name: faker.name.findName(),
        score: faker.random.number(100),
        classroomId: faker.random.number({ min: 1, max: 13 }),
        createdAt: new Date(),
        updatedAt: new Date()
      };

      queryData.push(seed);
    }

    return queryInterface.bulkInsert("Students", queryData);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Students", null, {});
  }
};
