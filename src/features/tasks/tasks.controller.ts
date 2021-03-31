import { RequestHandler, Request, Response } from "express";
import { WhereOptions } from "sequelize/types";
import Task from "./tasks.model";
import { IRequest } from "./tasks.types";

export const GetAllTasks: RequestHandler = async (req, res) => {
    const tasks = await Task.findAll()
    res.send(tasks)
}

export const GetTaskById = async ({ params: { id: taskId } }: IRequest, res: Response) => {
    // const taskId = req.params.id
    const task = await Task.findByPk(taskId)
    if (task == null) return res.status(404).send('Can\'t find this task')
    res.send(task)
}

export const CreateNewTask = async ({ body: newTask }: IRequest, res: Response) => {
    // const newTask = body
    const taskFromDb = await Task.create(newTask)
    res.status(201).send(taskFromDb)
}

export const UpdateTask = async (req: IRequest, res: Response) => {
    const newTask = req.body
    const taskId = req.params.id
    const result = await Task.update(newTask, { where: <WhereOptions>{ id: taskId } })
    if (result[0] !== 0) {
        res.status(200).send({ message: "Successful update" })
    } else {
        res.status(404).send({ message: "Can\'t find this task" })
    }
}

export const RemoveTask = async (req: IRequest, res: Response) => {
    const taskId = req.params.id
    const result = await Task.destroy({ where: <WhereOptions>{ id: taskId } })
    if (result !== 0) {
        res.status(200).send({ message: "Successful remove" })
    } else {
        res.status(404).send({ message: "Can\'t find this task" })
    }
}

