import { Request, Response } from 'express';
import { AuthorisationService } from '../services/authorisation.service';

export class AuthorisationController {
    static async register(req: Request, res: Response): Promise<any> {
        const { name, email, password } = req.body;

        const result = await AuthorisationService.register({
            name,
            email,
            password
        });

        return res.status(201).json(result);
    }
    static async login(req: Request, res: Response): Promise<any> {
        const { email, password } = req.body;

        const result = await AuthorisationService.login({
            email,
            password
        });

        return res.status(200).json(result);
    }
}
