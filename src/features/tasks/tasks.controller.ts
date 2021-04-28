import { Response } from "express";
import { WhereOptions } from "sequelize/types";
import Task from "./tasks.model";
import { IRequest } from "./tasks.types";

export const GetAllTasks = async (req: IRequest, res: Response) => {
    const userId = req.credentials.id
    const tasks = await Task.findAll({ where: { UserId: userId } })
    res.send(tasks)
}

export const GetTaskById = async ({ params: { id: taskId }, credentials }: IRequest, res: Response) => {
    const userId = credentials.id
    const task = await Task.findByPk(taskId)
    if (task?.UserId !== userId) return res.status(401).send('Permission denied')
    if (task == null) return res.status(404).send('Can\'t find this task')
    res.send(task)
}

export const CreateNewTask = async ({ body: newTask, credentials }: IRequest, res: Response) => {
    const taskFromDb = await Task.create({ ...newTask, UserId: credentials.id! })
    res.status(201).send(taskFromDb)
}

export const UpdateTask = async (req: IRequest, res: Response) => {
    const userId = req.credentials.id
    const newTask = req.body
    const taskId = req.params.id
    const result = await Task.update(newTask, { where: <WhereOptions>{ id: taskId, UserId: userId } })
    if (result[0] !== 0) {
        res.status(200).send({ message: "Successful update" })
    } else {
        res.status(404).send({ message: "Can\'t find this task" })
    }
}

export const RemoveTask = async (req: IRequest, res: Response) => {
    const userId = req.credentials.id
    const taskId = req.params.id
    const result = await Task.destroy({ where: <WhereOptions>{ id: taskId, UserId: userId } })
    if (result !== 0) {
        res.status(200).send({ message: "Successful remove" })
    } else {
        res.status(404).send({ message: "Can\'t find this task" })
    }
}

