"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const profile_service_1 = require("../services/profile.service");
class ProfileController {
    static async getProfile(req, res) {
        const email = req.body.email;
        const profile = await profile_service_1.ProfileService.getProfile(email);
        res.status(200).json(profile);
    }
    static async updateProfile(req, res) {
        const email = req.body.email;
        const update = req.body;
        await profile_service_1.ProfileService.updateProfile(email, update);
        res.status(200).json({
            msg: 'Profile was updated'
        });
    }
}
exports.ProfileController = ProfileController;
