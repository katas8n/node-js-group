"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorisation_controller_1 = require("../controllers/authorisation.controller");
const authRouter = (0, express_1.Router)();
authRouter.post('/register', (req, res) => authorisation_controller_1.AuthorisationController.register(req, res));
authRouter.post('/login', (req, res) => authorisation_controller_1.AuthorisationController.login(req, res));
exports.default = authRouter;
