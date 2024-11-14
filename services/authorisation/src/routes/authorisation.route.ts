import { Request, Response, Router } from 'express';
import { AuthorisationController } from '../controllers/authorisation.controller';

const authRouter = Router();

authRouter.post('/register', (req: Request, res: Response) =>
    AuthorisationController.register(req, res)
);
authRouter.post('/login', (req: Request, res: Response) =>
    AuthorisationController.login(req, res)
);

export default authRouter;
