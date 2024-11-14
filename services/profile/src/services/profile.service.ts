import { ProfileDal } from '../DAL/profile.dal';
import { ProfileDTO } from '../DTO/profile.dto';

export class ProfileService {
    static async getProfile(email: string) {
        return ProfileDal.getProfile(email);
    }
    static async updateProfile(email: string, update: Partial<ProfileDTO>) {
        return ProfileDal.updateProfile(email, update);
    }
}
