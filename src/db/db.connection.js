import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  database: "new11",
  username: "postgres",
  password: "postgres",
  port:5432,
  host:"localhost",
  logging:false,
});


export default sequelize