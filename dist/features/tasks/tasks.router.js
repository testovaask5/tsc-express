"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_service_1 = require("../../service/auth-service");
const tasks_controller_1 = require("./tasks.controller");
const tasksRouter = express_1.Router();
// @ts-ignore
tasksRouter.get('/api/tasks', auth_service_1.verifyToken, tasks_controller_1.GetAllTasks);
// @ts-ignore
tasksRouter.get('/api/task/:id', auth_service_1.verifyToken, tasks_controller_1.GetTaskById);
// @ts-ignore
tasksRouter.post('/api/task', auth_service_1.verifyToken, tasks_controller_1.CreateNewTask);
// @ts-ignore
tasksRouter.patch('/api/task/:id', auth_service_1.verifyToken, tasks_controller_1.UpdateTask);
// @ts-ignore
tasksRouter.delete('/api/task/:id', auth_service_1.verifyToken, tasks_controller_1.RemoveTask);
exports.default = tasksRouter;
//# sourceMappingURL=tasks.router.js.map