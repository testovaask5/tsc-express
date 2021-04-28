import { Request } from "express";
import { TokenRequest } from "../../service/auth-service";

export interface IRequest extends TokenRequest {
    params: {
        id: string
    }
    body: ITask
}

export interface ITask {
    text: string
    completed: boolean
    UserId: number
}

// export interface IRequestTask extends Request {
//     body: ITask
// }

// export interface IRequestIdTask extends IRequestId {
//     body?: ITask
// }