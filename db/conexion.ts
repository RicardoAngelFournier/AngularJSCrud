import { Sequelize } from 'sequelize';

const db = new Sequelize('proyecto1', 'root','toor',{
    host:'localhost',
    dialect:'mysql',
    logging:true,
})

export default db;
