import { WaterVehicle } from "../abstractions/waterVehicle";

export class Speedboat extends WaterVehicle {
  constructor(
    brand: string,
    model: string,
    year: number,
    fuelCapacity: number,
    initialFuel: number,
    maxPassengers: number,
    private readonly horsepower: number,
  ) {
    super(brand, model, year, fuelCapacity, initialFuel, "planing", maxPassengers);
  }

  accelerate(speed: number): void {
    if (!this.isRunning) {
      console.log(`  ${this.describe()} is not running.`);
      return;
    }
    const hpMultiplier = this.horsepower >= 300 ? 1.3 : 1;
    const actual = Math.min(Math.round(speed * hpMultiplier), 80);
    if (!this.consumeFuel(actual * 0.08)) {
      console.log(`  ${this.describe()} out of fuel while accelerating.`);
      return;
    }
    this.currentSpeed = actual;
    console.log(`  ${this.describe()} -> ${actual} knots [${this.horsepower} hp]`);
  }

  getStatus(): string {
    return `[Speedboat] ${this.describe()} | ${this.currentSpeed} knots | fuel: ${this.getFuelLevel().toFixed(1)}L | ${this.horsepower} hp`;
  }
}