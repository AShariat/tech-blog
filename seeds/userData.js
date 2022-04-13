const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "Amir",
    email: "amir@test.com",
    password: "123456",
  },
  {
    username: "Rezvan",
    email: "rezvan@test.com",
    password: "123456",
  },
  {
    username: "Lucy",
    email: "lucy@test.com",
    password: "123456",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
