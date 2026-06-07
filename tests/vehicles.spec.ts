import {describe, it, expect, beforeEach} from 'vitest'
import {Car} from "../src/lesson_9/classes/car";

let car: Car;

describe('Refuelling', () => {
    beforeEach(() => {
        car = new Car(
            "Toyota",
            "Supra MK5",
            2023,
            60,
            10,
            "manual",
            true)
    })

    it('should increase fuel level when refueled', () => {
        car.refuel(30);

        expect(car.getFuelLevel()).toBe(40);
    });

    it('should not exceed fuel capacity when overfilled', () => {
        car.refuel(9999);

        expect(car.getFuelLevel()).toBe(60);
    });

    it('should not start when there is no fuel', () => {
        const carWithoutFuel = new Car(
            "Toyota",
            "Supra MK5",
            2023,
            60,
            0,
            "manual",
            true)

        carWithoutFuel.start();

        expect(carWithoutFuel.getFuelLevel()).toBe(0);
        expect(carWithoutFuel.getStatus()).toContain('0 km/h');
    });

    it('should not change speed when already stopped', () => {
        car.stop();

        expect(car.getFuelLevel()).toBe(10);
        expect(car.getStatus()).toContain('0 km/h');
    });

    it('should accelerate with speed boost', () => {
        car.start();
        car.accelerate(100);

        expect(car.getStatus()).toContain('120 km/h');
    })
});