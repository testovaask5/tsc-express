"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_connection_1 = require("../../service/db-connection");
const sequelize_1 = require("sequelize");
const tasks_model_1 = __importDefault(require("../tasks/tasks.model"));
class User extends sequelize_1.Model {
}
exports.default = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'users',
    sequelize: db_connection_1.sequelize
});
// Task.hasOne(User)
// Task.belongsTo(User)
User.hasMany(tasks_model_1.default);
//# sourceMappingURL=users.model.js.map