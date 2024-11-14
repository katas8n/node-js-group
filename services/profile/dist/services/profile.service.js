"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const profile_dal_1 = require("../DAL/profile.dal");
class ProfileService {
    static async getProfile(email) {
        return profile_dal_1.ProfileDal.getProfile(email);
    }
    static async updateProfile(email, update) {
        return profile_dal_1.ProfileDal.updateProfile(email, update);
    }
}
exports.ProfileService = ProfileService;
