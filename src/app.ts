import { config } from "dotenv";
import path from "path";
if (process.env.NODE_ENV === 'production') {
    config({path: path.resolve(process.cwd(), '.env.production')})
} else config()
import cors from "cors";
import express, {ErrorRequestHandler} from "express";
import tasksRouter from "./features/tasks/tasks.router";
import usersRouter from "./features/users/users.router";

const port = process.env.PORT || 4000

const app = express();

app.use(cors())
app.use('/api', express.json())

app.use(tasksRouter)
app.use(usersRouter)

const nextError: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.statusCode).send(err)
}

app.use(nextError)

app.use(express.static(path.resolve(process.cwd(), 'public')))

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port)
})