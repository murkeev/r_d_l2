export abstract class Content {
    abstract readonly contentType: string;
    abstract getPreview(): string;

    protected constructor(
        readonly id: number,
        readonly title: string,
        readonly createdAt: Date,
    ) {}

    describe(): string {
        return `[${this.contentType}] #${this.id} "${this.title}" — ${this.getPreview()}`;
    }
}