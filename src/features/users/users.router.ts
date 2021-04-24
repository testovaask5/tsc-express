import { Router } from "express";
import { CreateNewUser, GetAllUsers } from "./users.controller";

const usersRouter = Router()

usersRouter.get('/api/users', GetAllUsers)

usersRouter.post('/api/user', CreateNewUser)

export default usersRouter