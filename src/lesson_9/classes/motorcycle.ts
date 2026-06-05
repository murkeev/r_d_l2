import {GroundVehicle} from "../abstractions/groundVehicle";

export class Motorcycle extends GroundVehicle {
    constructor(
        brand: string,
        model: string,
        year: number,
        fuelCapacity: number,
        initialFuel: number,
        private readonly engineCC: number,
    ) {
        super(brand, model, year, fuelCapacity, initialFuel, 2, "manual");
    }

    accelerate(speed: number): void {
        if (!this.isRunning) {
            console.log(`  ${this.describe()} is not running.`);
            return;
        }
        const actual = this.engineCC >= 600 ? Math.round(speed * 1.15) : speed;
        if (!this.consumeFuel(actual * 0.006)) {
            console.log(`  ${this.describe()} out of fuel while accelerating.`);
            return;
        }
        this.currentSpeed = actual;
        console.log(`  ${this.describe()} -> ${actual} km/h [${this.engineCC} cc]`);
    }

    getStatus(): string {
        return `[Motorcycle] ${this.describe()} | ${this.currentSpeed} km/h | fuel: ${this.getFuelLevel().toFixed(1)}L | engine: ${this.engineCC} cc`;
    }
}