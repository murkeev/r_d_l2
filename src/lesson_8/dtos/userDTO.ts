import type { User } from "../interfaces/user.ts";

export interface UserDTO {
    id: number;
    fullName: string;
    email: string;
    city: string;
    company: string;
}

export function toUserDTO(user: User): UserDTO {
    return {
        id: user.id,
        fullName: user.name,
        email: user.email,
        city: user.address.city,
        company: user.company.name,
    };
}