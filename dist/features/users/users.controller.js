"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.CreateNewUser = void 0;
const auth_service_1 = require("../../service/auth-service");
const users_model_1 = __importDefault(require("./users.model"));
// export const GetAllUsers: RequestHandler = async (req, res) => {
//     const tasks = await User.findAll()
//     res.send(tasks)
// }
const CreateNewUser = async (req, res) => {
    try {
        const newUser = req.body;
        const userFromDb = await users_model_1.default.create({
            name: newUser.name,
            password: await auth_service_1.createPasswordHash(newUser.password)
        });
        res.status(201).send(userFromDb);
    }
    catch (error) {
        res.status(403).send({ message: 'The name is not unique' });
    }
};
exports.CreateNewUser = CreateNewUser;
const Login = async (req, res) => {
    const loginUser = req.body;
    const userFromDb = await users_model_1.default.findOne({ where: { name: loginUser.name } });
    if (userFromDb && await auth_service_1.comparePassword(loginUser.password, userFromDb.password)) {
        const token = 'bearer ' + auth_service_1.createToken(userFromDb);
        res.send({
            token,
            success: true
        });
    }
    else {
        res.status(403).send({
            success: false
        });
    }
};
exports.Login = Login;
//# sourceMappingURL=users.controller.js.map