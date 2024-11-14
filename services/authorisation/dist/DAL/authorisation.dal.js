"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorisationDAL = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserDTO_1 = require("../DTO/UserDTO");
const dbConnector_1 = require("../util/dbConnector");
class AuthorisationDAL {
    static async login(email, password) {
        try {
            const dbInterface = await dbConnector_1.connector;
            const [result, fields] = await dbInterface.query(`
                SELECT * FROM users WHERE email = ? AND password = ?;
            `, [email, password]);
            const user = result[0];
            const userDTO = new UserDTO_1.UserDTO({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            });
            const token = jsonwebtoken_1.default.sign({
                id: user.id,
                name: user.name,
                email: user.email
            }, process.env.JWT_SECRET, {
                expiresIn: '1h'
            });
            console.log(`Successfully logged in, ${result[0].name} ${result[0].email}`);
            return { token, userDTO };
        }
        catch (e) {
            console.log('Error. Shit happens.');
        }
    }
    static async register(name, email, password) {
        try {
            const dbInterface = await dbConnector_1.connector;
            await dbInterface.query({
                sql: `INSERT INTO users(name, email, password) VALUES(?, ?, ?)`,
                values: [name, email, password],
                rowsAsArray: true
            });
            const userDTO = new UserDTO_1.UserDTO({ email: email, password: password });
            console.log(userDTO);
        }
        catch (e) {
            console.log('Error. Shit happens.' + e.message);
        }
    }
}
exports.AuthorisationDAL = AuthorisationDAL;
