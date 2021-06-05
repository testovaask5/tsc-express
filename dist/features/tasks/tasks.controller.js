"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTask = exports.UpdateTask = exports.CreateNewTask = exports.GetTaskById = exports.GetAllTasks = void 0;
const tasks_model_1 = __importDefault(require("./tasks.model"));
const GetAllTasks = async (req, res) => {
    const userId = req.credentials.id;
    const tasks = await tasks_model_1.default.findAll({ where: { UserId: userId } });
    res.send(tasks);
};
exports.GetAllTasks = GetAllTasks;
const GetTaskById = async ({ params: { id: taskId }, credentials }, res) => {
    const userId = credentials.id;
    const task = await tasks_model_1.default.findByPk(taskId);
    if ((task === null || task === void 0 ? void 0 : task.UserId) !== userId)
        return res.status(401).send('Permission denied');
    if (task == null)
        return res.status(404).send('Can\'t find this task');
    res.send(task);
};
exports.GetTaskById = GetTaskById;
const CreateNewTask = async ({ body: newTask, credentials }, res) => {
    const taskFromDb = await tasks_model_1.default.create(Object.assign(Object.assign({}, newTask), { UserId: credentials.id }));
    res.status(201).send(taskFromDb);
};
exports.CreateNewTask = CreateNewTask;
const UpdateTask = async (req, res) => {
    const userId = req.credentials.id;
    const newTask = req.body;
    const taskId = req.params.id;
    const result = await tasks_model_1.default.update(newTask, { where: { id: taskId, UserId: userId } });
    if (result[0] !== 0) {
        res.status(200).send({ message: "Successful update" });
    }
    else {
        res.status(404).send({ message: "Can\'t find this task" });
    }
};
exports.UpdateTask = UpdateTask;
const RemoveTask = async (req, res) => {
    const userId = req.credentials.id;
    const taskId = req.params.id;
    const result = await tasks_model_1.default.destroy({ where: { id: taskId, UserId: userId } });
    if (result !== 0) {
        res.status(200).send({ message: "Successful remove" });
    }
    else {
        res.status(404).send({ message: "Can\'t find this task" });
    }
};
exports.RemoveTask = RemoveTask;
//# sourceMappingURL=tasks.controller.js.map