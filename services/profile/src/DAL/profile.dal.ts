import { ProfileDTO } from '../DTO/profile.dto';
import { connector } from '../util/dbConnector';

export class ProfileDal {
    static async getProfile(email: string) {
        const db = await connector;

        const [resultUserQuery] = await db.query(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        );

        const user = resultUserQuery[0];

        await db.query(
            `INSERT INTO profiles (name,role,email)  VALUES (?, ?, ?)`,
            [user.name, 'USER', user.email]
        );

        const [profile] = await db.query(
            `SELECT * FROM profiles WHERE email = ?`,
            [user.email]
        );

        return new ProfileDTO(profile[0]);
    }

    static async updateProfile(
        email: string,
        updatedProfile: Partial<ProfileDTO>
    ) {
        console.log(email);

        const db = await connector;
        await db.query(`UPDATE profiles SET ? WHERE email = ?`, [
            updatedProfile,
            email
        ]);
    }
}
