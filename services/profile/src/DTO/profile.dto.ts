// enum role {
//     ADMIN = "ADMIN",
//     USER = "USER",
//     SUPERADMIN = "SUPERADMIN",
// }

// type availiableRoles = role.ADMIN | role.USER | role.SUPERADMIN;

export class ProfileDTO {
    id?: number;
    name: string;
    surname?: string;
    nickname?: string;
    role: string;
    email: string;

    //TODO: interface IProfileDTO
    constructor({
        id,
        name,
        surname,
        nickname,
        role,
        email
    }: Partial<ProfileDTO>) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.nickname = nickname;
        this.role = role;
        this.email = email;
    }
}
