"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
(async function () {
    try {
        await exports.sequelize.authenticate();
        await exports.sequelize.sync();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
//# sourceMappingURL=db-connection.js.map