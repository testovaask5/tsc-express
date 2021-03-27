import express from "express";
import tasksRouter from "./features/tasks/tasks.router";

const app = express();

app.use('/api', express.json())

app.use(tasksRouter)

app.listen(4000, () => {
    console.log('Server started at http://localhost:4000')
})