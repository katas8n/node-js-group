import jwt from 'jsonwebtoken';
import { UserDTO } from '../DTO/UserDTO';
import { connector } from '../util/dbConnector';

export class AuthorisationDAL {
    static async login(email: string, password: string) {
        try {
            const dbInterface = await connector;
            const [result, fields] = await dbInterface.query(
                `
                SELECT * FROM users WHERE email = ? AND password = ?;
            `,
                [email, password]
            );
            const user = result[0];

            const userDTO = new UserDTO({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            });

            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    email: user.email
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1h'
                }
            );
            console.log(
                `Successfully logged in, ${result[0].name} ${result[0].email}`
            );

            return { token, userDTO };
        } catch (e) {
            console.log('Error. Shit happens.');
        }
    }

    static async register(name: string, email: string, password: string) {
        try {
            const dbInterface = await connector;
            await dbInterface.query({
                sql: `INSERT INTO users(name, email, password) VALUES(?, ?, ?)`,
                values: [name, email, password],
                rowsAsArray: true
            });

            const userDTO = new UserDTO({ email: email, password: password });

            console.log(userDTO);
        } catch (e) {
            console.log('Error. Shit happens.' + e.message);
        }
    }
}
