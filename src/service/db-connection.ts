import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(<string>process.env.DB_NAME, <string>process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

(async function() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error(error)
        process.exit(1)        
    }
})()