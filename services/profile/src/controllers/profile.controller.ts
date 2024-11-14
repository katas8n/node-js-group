import { Request, Response } from 'express';
import { ProfileService } from '../services/profile.service';

export class ProfileController {
    static async getProfile(req: Request, res: Response) {
        const email = req.body.email;
        const profile = await ProfileService.getProfile(email);

        res.status(200).json(profile);
    }
    static async updateProfile(req: Request, res: Response) {
        const email = req.body.email;
        const update = req.body;

        await ProfileService.updateProfile(email, update);

        res.status(200).json({
            msg: 'Profile was updated'
        });
    }
}
