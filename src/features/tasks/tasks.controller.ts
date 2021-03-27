import { RequestHandler, Request, Response } from "express";
import Task from "./tasks.model";
import { IRequestId, IRequestTask } from "./tasks.types";

export const GetAllTasks: RequestHandler = async (req, res) => {
    const tasks = await Task.findAll()
    res.send(tasks)
}

export const GetTaskById = async ({params: {id: taskId}}: IRequestId, res: Response) => {
    const task = await Task.findByPk(taskId)
    if (task == null) return res.status(404).send('Can\'t find this task')
    res.send(task)
}

export const CreateNewTask = async ({body: newTask}: IRequestTask, res: Response) => {
    const taskFromDb = await Task.create(newTask)
    res.status(201).send(taskFromDb)
}