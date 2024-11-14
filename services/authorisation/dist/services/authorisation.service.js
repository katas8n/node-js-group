"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorisationService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const authorisation_dal_1 = require("../DAL/authorisation.dal");
const dbConnector_1 = require("../util/dbConnector");
class AuthorisationService {
    static async register({ name, email, password }) {
        bcrypt_1.default.hash(password, 1, async function (err, hashedPassword) {
            if (err)
                return;
            console.log(hashedPassword.length);
            return await authorisation_dal_1.AuthorisationDAL.register(name, email, hashedPassword);
        });
    }
    static async login({ email, password }) {
        const dbInterface = await dbConnector_1.connector;
        const [result, fields] = await dbInterface.query('SELECT * FROM users WHERE email = ?', email);
        const user = result[0];
        const isValidPassword = await bcrypt_1.default.compare(password, user.password);
        if (!isValidPassword)
            return "Are u hucking idiot? What's wrong with u?";
        return await authorisation_dal_1.AuthorisationDAL.login(user.email, user.password);
    }
}
exports.AuthorisationService = AuthorisationService;
