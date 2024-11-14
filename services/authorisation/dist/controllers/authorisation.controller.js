"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorisationController = void 0;
const authorisation_service_1 = require("../services/authorisation.service");
class AuthorisationController {
    static async register(req, res) {
        const { name, email, password } = req.body;
        const result = await authorisation_service_1.AuthorisationService.register({
            name,
            email,
            password
        });
        return res.status(201).json(result);
    }
    static async login(req, res) {
        const { email, password } = req.body;
        const result = await authorisation_service_1.AuthorisationService.login({
            email,
            password
        });
        return res.status(200).json(result);
    }
}
exports.AuthorisationController = AuthorisationController;
