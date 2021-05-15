import { config } from "dotenv";
config()
import cors from "cors";
import express, {ErrorRequestHandler} from "express";
import tasksRouter from "./features/tasks/tasks.router";
import usersRouter from "./features/users/users.router";

const app = express();

app.use(cors())
app.use('/api', express.json())

app.use(tasksRouter)
app.use(usersRouter)

const nextError: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.statusCode).send(err)
}

app.use(nextError)

app.listen(4000, () => {
    console.log('Server started at http://localhost:4000')
})