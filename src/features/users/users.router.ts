import { Router } from "express";
import { CreateNewUser, Login } from "./users.controller";

const usersRouter = Router()

// usersRouter.get('/api/users', GetAllUsers)

usersRouter.post('/api/user', CreateNewUser)

usersRouter.post('/api/user/login', Login)

export default usersRouter