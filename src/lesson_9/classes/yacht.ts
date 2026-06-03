import {WaterVehicle} from "../abstractions/waterVehicle";

export class Yacht extends WaterVehicle {
    constructor(
        brand: string,
        model: string,
        year: number,
        fuelCapacity: number,
        initialFuel: number,
        maxPassengers: number,
        private readonly hasSails: boolean = false,
    ) {
        super(brand, model, year, fuelCapacity, initialFuel, "monohull", maxPassengers);
    }

    accelerate(speed: number): void {
        if (!this.isRunning) {
            console.log(`  ${this.describe()} is not running.`);
            return;
        }
        const limit = this.hasSails ? 20 : 35;
        const actual = Math.min(speed, limit);
        const fuelRate = this.hasSails ? 0.03 : 0.05;
        if (!this.consumeFuel(actual * fuelRate)) {
            console.log(`  ${this.describe()} out of fuel while accelerating.`);
            return;
        }
        this.currentSpeed = actual;
        console.log(`  ${this.describe()} -> ${actual} knots ${this.hasSails ? " (sail assist)" : ""}`);
    }

    getStatus(): string {
        return `[Yacht] ${this.describe()} | ${this.currentSpeed} knots | fuel: ${this.getFuelLevel().toFixed(1)}L | sails: ${this.hasSails}`;
    }
}