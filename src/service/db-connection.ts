import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('San_react_ov4', 'san', '2eJi7o', {
    host: '109.206.169.221',
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