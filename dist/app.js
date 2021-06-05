"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
if (process.env.NODE_ENV === 'production') {
    dotenv_1.config({ path: path_1.default.resolve(process.cwd(), '.env.production') });
}
else
    dotenv_1.config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const tasks_router_1 = __importDefault(require("./features/tasks/tasks.router"));
const users_router_1 = __importDefault(require("./features/users/users.router"));
const port = process.env.PORT || 4000;
const app = express_1.default();
app.use(cors_1.default());
app.use('/api', express_1.default.json());
app.use(tasks_router_1.default);
app.use(users_router_1.default);
const nextError = (err, req, res, next) => {
    res.status(err.statusCode).send(err);
};
app.use(nextError);
app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});
//# sourceMappingURL=app.js.map