import { Content } from "../interfaces/abstraction";

export class ContentFeed {
    private items: Content[] = [];

    add(content: Content): void {
        this.items.push(content);
    }

    getByType(type: string): Content[] {
        return this.items.filter(item => item.contentType === type);
    }

    describeAll(): void {
        this.items.forEach(item => console.log(item.describe()));
    }
}