const sequelize = require("../config/connection");
const seedUsers = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log("--------------");

  console.log("Tech Blog SEEDED!");

  process.exit(0);
};
seedAll();
