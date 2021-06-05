"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.createPasswordHash = exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function createToken(userFromDB) {
    const token = jsonwebtoken_1.default.sign({ id: userFromDB.id }, process.env.JWT_SECRET, { expiresIn: "2 days" });
    return token;
}
exports.createToken = createToken;
function verifyToken(req, res, next) {
    if (req.headers['authorization'] && req.headers['authorization'].length) {
        const token = req.headers['authorization'].replace(/(bearer|jwt)\s+/, '');
        const verifyCallback = (err, decodedToken) => {
            const token = decodedToken;
            if (err) {
                return next({ message: "Failed to authenticate token", statusCode: 401 });
            }
            req.credentials = { id: token.id };
            next();
        };
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, verifyCallback);
    }
    else {
        return next({ message: "Failed to authenticate token", statusCode: 401 });
    }
}
exports.verifyToken = verifyToken;
async function createPasswordHash(password) {
    const salt = await bcryptjs_1.default.genSalt(10);
    return bcryptjs_1.default.hash(password, salt);
}
exports.createPasswordHash = createPasswordHash;
async function comparePassword(password, hash) {
    if (typeof password === 'string') {
        const result = await bcryptjs_1.default.compare(password, hash);
        return result;
    }
    else
        return false;
}
exports.comparePassword = comparePassword;
//# sourceMappingURL=auth-service.js.map