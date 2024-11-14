"use strict";
// enum role {
//     ADMIN = "ADMIN",
//     USER = "USER",
//     SUPERADMIN = "SUPERADMIN",
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDTO = void 0;
// type availiableRoles = role.ADMIN | role.USER | role.SUPERADMIN;
class ProfileDTO {
    id;
    name;
    surname;
    nickname;
    role;
    email;
    //TODO: interface IProfileDTO
    constructor({ id, name, surname, nickname, role, email }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.nickname = nickname;
        this.role = role;
        this.email = email;
    }
}
exports.ProfileDTO = ProfileDTO;
