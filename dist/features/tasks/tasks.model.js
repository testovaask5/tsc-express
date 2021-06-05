"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("../../service/db-connection");
const sequelize_1 = require("sequelize");
class Task extends sequelize_1.Model {
}
exports.default = Task;
const StringType = () => ({
    type: sequelize_1.DataTypes.STRING,
    allowNull: false
});
Task.init({
    text: StringType(),
    completed: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    UserId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
}, {
    tableName: 'tasks',
    sequelize: db_connection_1.sequelize
});
//# sourceMappingURL=tasks.model.js.map