import { Router } from "express";
import { verifyToken } from "../../service/auth-service";
import { CreateNewTask, GetAllTasks, GetTaskById, RemoveTask, UpdateTask } from "./tasks.controller";

const tasksRouter = Router()

// @ts-ignore
tasksRouter.get('/api/tasks',  verifyToken, GetAllTasks)

// @ts-ignore
tasksRouter.get('/api/task/:id', verifyToken, GetTaskById)

// @ts-ignore
tasksRouter.post('/api/task', verifyToken, CreateNewTask)

// @ts-ignore
tasksRouter.patch('/api/task/:id', verifyToken, UpdateTask)

// @ts-ignore
tasksRouter.delete('/api/task/:id', verifyToken, RemoveTask)

export default tasksRouter