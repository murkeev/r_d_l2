import { Content } from "../interfaces/abstraction";

export class Video extends Content {
    readonly contentType = "Video";

    constructor(
        id: number,
        title: string,
        createdAt: Date,
        private durationSeconds: number,
        private url: string,
    ) {
        super(id, title, createdAt);
    }

    getPreview(): string {
        const mins = Math.floor(this.durationSeconds / 60);
        const secs = this.durationSeconds % 60;
        return `${mins}:${secs.toString()} -> ${this.url}`;
    }
}