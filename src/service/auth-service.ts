import jwt, { VerifyCallback } from 'jsonwebtoken'
import { Request, Response, NextFunction } from "express";
import User from '../features/users/users.model';
import bcryptjs from "bcryptjs";

type DecodedToken = {
    id: number
}

export interface TokenRequest extends Request {
    credentials: {
        id?: number
        role?: "guest" | "admin"
    }
}

export function createToken(userFromDB: User) {
    const token = jwt.sign({ id: userFromDB.id }, <string>process.env.JWT_SECRET,
        { expiresIn: "2 days" })
    return token
}

export function verifyToken(req: TokenRequest, res: Response, next: NextFunction) {
    if (req.headers['authorization'] && req.headers['authorization'].length) {
        const token = (<string>req.headers['authorization']).replace(/(bearer|jwt)\s+/, '')
        const verifyCallback: VerifyCallback = (err, decodedToken) => {
            const token = decodedToken as DecodedToken
            if (err) {
                return next({ message: "Failed to authenticate token", statusCode: 401 })
            }
            req.credentials = { id: token.id }
            next()
        }
        jwt.verify(token, <string>process.env.JWT_SECRET, verifyCallback)
    } else {
        return next({ message: "Failed to authenticate token", statusCode: 401 })
    }
}

export async function createPasswordHash(password: string) {
    const salt = await bcryptjs.genSalt(10)
    return bcryptjs.hash(password, salt)
}

export async function comparePassword(password: string, hash: string) {
    if (typeof password === 'string') {
        const result = await bcryptjs.compare(password, hash)
        return result
    }
    else return false
}