import {Sequelize}  from "sequelize";

const db = new Sequelize('prograComercialP2','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
