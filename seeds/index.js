const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log("--------------------");

  await seedPosts();
  console.log("--------------------");

  await seedComments();
  console.log("--------------------");

  console.log("Tech Blog SEEDED!");

  process.exit(0);
};
seedAll();
