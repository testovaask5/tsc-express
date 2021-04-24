import { RequestHandler, Request, Response } from "express";
import { WhereOptions } from "sequelize/types";
import { createPasswordHash } from "../../service/auth-service";
import User from "./users.model";
import { IUser } from "./users.types";

export const GetAllUsers: RequestHandler = async (req, res) => {
    const tasks = await User.findAll()
    res.send(tasks)
}

export const CreateNewUser = async (req: Request, res: Response) => {
    const newUser: IUser = req.body
    const taskFromDb = await User.create({
        name: newUser.name,
        password: await createPasswordHash(newUser.password)
    })
    res.status(201).send(taskFromDb)
}