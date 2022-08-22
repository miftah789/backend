import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
//miftahul jannah
export default db;