import { IUserDTO } from '../interfaces/IUserDTO';

export class UserDTO {
    id?: number;
    name?: string;
    email: string;
    password?: string;

    constructor({ id, name, email, password }: IUserDTO) {
        this.id = id;
        if (password) this.name = name;
        this.email = email;
        if (password) this.password = password;
    }
}
