import {GroundVehicle} from "../abstractions/groundVehicle";

export class Car extends GroundVehicle {
    constructor(
        brand: string,
        model: string,
        year: number,
        fuelCapacity: number,
        initialFuel: number,
        transmissionType: "manual" | "automatic",
        private readonly turbo: boolean = false,
    ) {
        super(brand, model, year, fuelCapacity, initialFuel, 4, transmissionType);
    }

    accelerate(speed: number): void {
        if (!this.isRunning) {
            console.log(`  ${this.describe()} is not running.`);
            return;
        }
        const actual = this.turbo ? Math.round(speed * 1.2) : speed;
        if (!this.consumeFuel(actual * 0.01)) {
            console.log(`  ${this.describe()} out of fuel while accelerating.`);
            return;
        }
        this.currentSpeed = actual;
        console.log(`  ${this.describe()} -> ${actual} km/h${this.turbo ? " (turbo)" : ""}`);
    }

    getStatus(): string {
        return `[Car] ${this.describe()} | ${this.currentSpeed} km/h | fuel: ${this.getFuelLevel().toFixed(1)}L | turbo: ${this.turbo}`;
    }
}