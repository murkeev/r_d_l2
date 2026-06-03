export interface Drivable {
    start(): void;

    stop(): void;

    accelerate(speed: number): void;

    getStatus(): string;
}
