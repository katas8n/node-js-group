"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    console.log(req.headers['authorization']);
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        res.status(403).json({
            msg: "Token hasn't been found"
        });
        return;
    }
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err)
            return res.json({
                msg: 'There is an error with verification.'
            });
        next();
    });
};
exports.authenticate = authenticate;
