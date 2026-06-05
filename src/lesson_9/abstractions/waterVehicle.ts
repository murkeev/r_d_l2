import {AbstractVehicle} from "./abstractVehicle";

export abstract class WaterVehicle extends AbstractVehicle {
    protected constructor(
        brand: string,
        model: string,
        year: number,
        fuelCapacity: number,
        initialFuel: number,
        readonly hullType: "monohull" | "catamaran" | "planing",
        readonly maxPassengers: number,
    ) {
        super(brand, model, year, fuelCapacity, initialFuel);
    }

    start(): void {
        if (this.isRunning) {
            console.log(`  ${this.describe()} is already running.`);
            return;
        }
        if (!this.consumeFuel(1)) {
            console.log(`  ${this.describe()} cannot start - no fuel.`);
            return;
        }
        this.isRunning = true;
        console.log(`  ${this.describe()} started. [${this.hullType} hull | max ${this.maxPassengers} passengers]`);
    }

    stop(): void {
        if (!this.isRunning) {
            console.log(`  ${this.describe()} is already stopped.`);
            return;
        }
        this.isRunning = false;
        this.currentSpeed = 0;
        console.log(`  ${this.describe()} stopped.`);
    }
}