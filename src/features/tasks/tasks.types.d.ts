import { Request } from "express";

export interface IRequest extends Request {
    params: {
        id: string
    }
    body: TaskDTO
}

export interface TaskDTO {
    text: string
    completed: boolean
}

// export interface IRequestTask extends Request {
//     body: ITask
// }

// export interface IRequestIdTask extends IRequestId {
//     body?: ITask
// }