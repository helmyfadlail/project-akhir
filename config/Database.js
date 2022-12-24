import {Sequelize} from "sequelize";

const db = new Sequelize('sistem_integrasi', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;