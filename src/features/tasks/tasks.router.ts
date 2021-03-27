import { Router } from "express";
import { CreateNewTask, GetAllTasks, GetTaskById } from "./tasks.controller";

const tasksRouter = Router()

tasksRouter.get('/api/tasks', GetAllTasks)

tasksRouter.get('/api/task/:id', GetTaskById)

tasksRouter.post('/api/task', CreateNewTask)

export default tasksRouter