import type { User } from "../interfaces/user";

export class UserSummary {
    readonly id: number;
    readonly summary: string;
    readonly contactInfo: string;
    readonly location: string;
    readonly totalChars: number;

    constructor(user: User) {
        this.id = user.id;
        this.summary = `${user.name} (@${user.username}) — ${user.company.name}`;
        this.contactInfo = `email: ${user.email} | phone: ${user.phone} | site: ${user.website}`;
        this.location = `${user.address.city}, ${user.address.street} ${user.address.suite}`;
        this.totalChars =
            user.name.length +
            user.username.length +
            user.email.length +
            user.phone.length +
            user.website.length;
    }
}