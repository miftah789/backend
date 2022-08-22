import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

//miftahul jannah
const Users = db.define('users', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type:  DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    nama: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Users;