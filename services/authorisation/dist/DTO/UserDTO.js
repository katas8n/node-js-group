"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    id;
    name;
    email;
    password;
    constructor({ id, name, email, password }) {
        this.id = id;
        if (password)
            this.name = name;
        this.email = email;
        if (password)
            this.password = password;
    }
}
exports.UserDTO = UserDTO;
