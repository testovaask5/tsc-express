import { sequelize } from "../../service/db-connection";
import { Model, DataTypes, UpdateOptions } from "sequelize";
import { TaskDTO } from "./tasks.types";

export default class Task extends Model<TaskDTO> implements TaskDTO {
    text!: string;
    completed!: boolean;
}

const StringType = () => ({
    type: DataTypes.STRING,
    allowNull: false
})

Task.init({
    text: StringType(),
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'tasks',
    sequelize
})