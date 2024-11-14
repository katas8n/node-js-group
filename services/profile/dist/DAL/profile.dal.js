"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDal = void 0;
const profile_dto_1 = require("../DTO/profile.dto");
const dbConnector_1 = require("../util/dbConnector");
class ProfileDal {
    static async getProfile(email) {
        const db = await dbConnector_1.connector;
        const [resultUserQuery] = await db.query(`SELECT * FROM users WHERE email = ?`, [email]);
        const user = resultUserQuery[0];
        await db.query(`INSERT INTO profiles (name,role,email)  VALUES (?, ?, ?)`, [user.name, 'USER', user.email]);
        const [profile] = await db.query(`SELECT * FROM profiles WHERE email = ?`, [user.email]);
        return new profile_dto_1.ProfileDTO(profile[0]);
    }
    static async updateProfile(email, updatedProfile) {
        console.log(email);
        const db = await dbConnector_1.connector;
        await db.query(`UPDATE profiles SET ? WHERE email = ?`, [
            updatedProfile,
            email
        ]);
    }
}
exports.ProfileDal = ProfileDal;
