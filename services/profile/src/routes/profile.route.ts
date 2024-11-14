import { Router } from 'express';
import { ProfileController } from '../controllers/profile.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/profile', authenticate, ProfileController.getProfile);
router.put('/profile', authenticate, ProfileController.updateProfile);

export { router };
