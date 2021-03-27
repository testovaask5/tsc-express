import { sequelize } from "../../service/db-connection";
import { Model, DataTypes } from "sequelize";
import { ITask } from "./tasks.types";

export default class Task extends Model<ITask> implements ITask {
    public text!: string;
    public completed!: boolean;
}

Task.init({
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'tasks',
    sequelize
})