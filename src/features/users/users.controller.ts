import { RequestHandler, Request, Response } from "express";
import { WhereOptions } from "sequelize/types";
import { comparePassword, createPasswordHash, createToken } from "../../service/auth-service";
import User from "./users.model";
import { IUser } from "./users.types";

// export const GetAllUsers: RequestHandler = async (req, res) => {
//     const tasks = await User.findAll()
//     res.send(tasks)
// }

export const CreateNewUser = async (req: Request, res: Response) => {
    const newUser: IUser = req.body
    const userFromDb = await User.create({
        name: newUser.name,
        password: await createPasswordHash(newUser.password)
    })
    res.status(201).send(userFromDb)
}

export const Login = async (req: Request, res: Response) => {
    const loginUser: IUser = req.body
    const userFromDb = await User.findOne({where: {name: loginUser.name}})
    if (userFromDb && await comparePassword(loginUser.password, userFromDb.password)) {
        const token = 'bearer ' + createToken(userFromDb)
        res.send({
            token,
            success: true
        })
    } else {
        res.status(403).send({
            success: false
        })
    }
}