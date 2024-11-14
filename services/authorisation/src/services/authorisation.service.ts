import bycrypt from 'bcrypt';
import { AuthorisationDAL } from '../DAL/authorisation.dal';
import { IUserDTO } from '../interfaces/IUserDTO';
import { connector } from '../util/dbConnector';

export class AuthorisationService {
    static async register({ name, email, password }: IUserDTO) {
        bycrypt.hash(password!, 1, async function (err, hashedPassword) {
            if (err) return;

            console.log(hashedPassword.length);

            return await AuthorisationDAL.register(
                name!,
                email,
                hashedPassword
            );
        });
    }

    static async login({ email, password }: IUserDTO) {
        const dbInterface = await connector;

        const [result, fields] = await dbInterface.query(
            'SELECT * FROM users WHERE email = ?',
            email
        );

        const user = result[0];

        const isValidPassword = await bycrypt.compare(password, user.password);

        if (!isValidPassword)
            return "Are u hucking idiot? What's wrong with u?";

        return await AuthorisationDAL.login(user.email, user.password);
    }
}
