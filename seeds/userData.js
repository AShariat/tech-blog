const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    id: "1",
    username: "Amir",
    email: "amir@test.com",
    password: "123456",
  },
  {
    id: "2",
    username: "Rezvan",
    email: "rezvan@test.com",
    password: "123456",
  },
  {
    id: "3",
    username: "Lucy",
    email: "lucy@test.com",
    password: "123456",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
