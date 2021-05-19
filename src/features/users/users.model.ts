import { sequelize } from "../../service/db-connection";
import { Model, DataTypes } from "sequelize";
import { IUser } from "./users.types";
import Task from "../tasks/tasks.model";

export default class User extends Model<IUser> implements IUser {
    id!: number;
    name!: string;
    password!: string;
    public readonly tasks?: Task[];
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'users',
    sequelize
})

// Task.hasOne(User)
// Task.belongsTo(User)
User.hasMany(Task)