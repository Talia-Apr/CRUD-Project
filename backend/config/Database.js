import {Sequelize} from "sequelize";

const db = new Sequelize('try_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
