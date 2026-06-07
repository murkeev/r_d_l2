import {AbstractVehicle} from "./abstractVehicle"

export abstract class GroundVehicle extends AbstractVehicle {
    protected constructor(
        brand: string,
        model: string,
        year: number,
        fuelCapacity: number,
        initialFuel: number,
        readonly numberOfWheels: number,
        readonly transmissionType: "manual" | "automatic",
    ) {
        super(brand, model, year, fuelCapacity, initialFuel);
    }

    start(): void {
        if (this.isRunning) {
            console.log(`  ${this.describe()} is already running.`);
            return;
        }
        if (!this.consumeFuel(0.5)) {
            console.log(`  ${this.describe()} cannot start - no fuel.`);
            return;
        }
        this.isRunning = true;
        console.log(`  ${this.describe()} started. [${this.transmissionType} | ${this.numberOfWheels} wheels]`);
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