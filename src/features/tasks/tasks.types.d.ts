import { Request } from "express";

export interface IRequestId extends Request {
    params: {
        id: string
    }
}

export interface ITask {
    text: string
    completed: boolean
}

export interface IRequestTask extends Request {
    body: ITask
}