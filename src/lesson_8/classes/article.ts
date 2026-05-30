import { Content } from "../interfaces/abstraction";

export class Article extends Content {
    readonly contentType = "Article";

    constructor(
        id: number,
        title: string,
        createdAt: Date,
        private body: string,
        private author: string,
    ) {
        super(id, title, createdAt);
    }

    getPreview(): string {
        return `${this.body.slice(0, 60)}... by ${this.author}`;
    }
}