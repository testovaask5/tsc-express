import { Router } from "express";
import { CreateNewTask, GetAllTasks, GetTaskById, RemoveTask, UpdateTask } from "./tasks.controller";

const tasksRouter = Router()

tasksRouter.get('/api/tasks', GetAllTasks)

tasksRouter.get('/api/task/:id', GetTaskById)

tasksRouter.post('/api/task', CreateNewTask)

tasksRouter.patch('/api/task/:id', UpdateTask)

tasksRouter.delete('/api/task/:id', RemoveTask)

export default tasksRouter