"use strict";

const faker = require("faker");

module.exports = {
  up: queryInterface => {
    let queryData = [];

    for (let i = 0; i < 100; i++) {
      const seed = {
        title: faker.random.word(),
        deadline: faker.date.future(),
        createdAt: new Date(),
        updatedAt: new Date()
      };

      queryData.push(seed);
    }

    return queryInterface.bulkInsert("Works", queryData);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Works", null, {});
  }
};
