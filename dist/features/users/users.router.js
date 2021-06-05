"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const usersRouter = express_1.Router();
// usersRouter.get('/api/users', GetAllUsers)
usersRouter.post('/api/user', users_controller_1.CreateNewUser);
usersRouter.post('/api/user/login', users_controller_1.Login);
exports.default = usersRouter;
//# sourceMappingURL=users.router.js.map