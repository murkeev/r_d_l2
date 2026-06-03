import type {Drivable} from "./interfaces/drivable.js";
import type {Refuelable} from "./interfaces/refuelable.js";
import {Car} from "./classes/car.js";
import {Motorcycle} from "./classes/motorcycle.js";
import {Yacht} from "./classes/yacht.js";
import {Speedboat} from "./classes/speedboat.js";

function conductTestDrive(vehicle: Drivable, label: string): void {
    console.log(`\n Test drive: ${label}`);
    vehicle.start();
    vehicle.accelerate(60);
    vehicle.accelerate(100);
    console.log(`  Status -> ${vehicle.getStatus()}`);
    vehicle.stop();
    console.log(`${"-".repeat(50)}`);
}

const car = new Car("Toyota", "Supra MK5", 2023, 60, 55, "manual", true);
const motorcycle = new Motorcycle("Ducati", "Panigale V4", 2022, 16, 14, 1103);
const yacht = new Yacht("Beneteau", "Oceanis 51", 2021, 200, 180, 10, true);
const speedboat = new Speedboat("Formula", "350 CBR", 2023, 300, 280, 8, 425);
const fleet: (Drivable & Refuelable)[] = [car, motorcycle, yacht, speedboat];

conductTestDrive(car, "Toyota Supra (Car, turbo)");
conductTestDrive(motorcycle, "Ducati Panigale (Motorcycle, 1103 cc)");
conductTestDrive(yacht, "Beneteau Oceanis (Yacht, sail assist)");
conductTestDrive(speedboat, "Formula 350 CBR (Speedboat, 425 hp)");

console.log("\n═══ Fleet status after full refuel ═══"); // TODO
fleet.forEach(v => {
    v.refuel(999);
    v.start();
    v.accelerate(80);
    console.log(`  ${v.getStatus()}`);
    v.stop();
});