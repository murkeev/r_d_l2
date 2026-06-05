import type {Drivable} from "../interfaces/drivable";
import type {Refuelable} from "../interfaces/refuelable";

export abstract class AbstractVehicle implements Drivable, Refuelable {
    protected isRunning = false;
    protected currentSpeed = 0;
    private fuelLevel: number;

    protected constructor(
        readonly brand: string,
        readonly model: string,
        readonly year: number,
        private readonly fuelCapacity: number,
        initialFuel: number,
    ) {
        this.fuelLevel = this.clampFuel(initialFuel);
    }

    private clampFuel(amount: number): number {
        return Math.min(amount, this.fuelCapacity);
    }

    refuel(amount: number): void {
        const added = Math.min(amount, this.fuelCapacity - this.fuelLevel);
        this.fuelLevel += added;
        console.log(`  Refueled +${added}L -> total: ${this.fuelLevel.toFixed(1)}L`);
    }

    getFuelLevel(): number {
        return this.fuelLevel;
    }

    protected consumeFuel(amount: number): boolean {
        if (this.fuelLevel < amount) return false;
        this.fuelLevel -= amount;
        return true;
    }

    describe(): string {
        return `${this.year} ${this.brand} ${this.model}`;
    }

    abstract start(): void;

    abstract stop(): void;

    abstract accelerate(speed: number): void;

    abstract getStatus(): string;
}