import {Car} from "../src/lesson_9/classes/car";


let car: Car;

describe('Car', () => {
    beforeEach(() => {
        car = new Car(
            "Toyota",
            "Supra MK5",
            2023,
            60,
            55,
            "manual",
            true)
    })

    it('should accelerate with speed boost when turbo is enabled', () => {
        car.start();
        car.accelerate(100);

        expect(car.getStatus()).toContain('120 km/h');
    });

    it('should accelerate without speed boost when turbo is disabled', () => {
        const carWithoutTurbo = new Car(
            "Toyota",
            "Supra MK5",
            2023,
            60,
            55,
            "manual",
            false)

        carWithoutTurbo.start();
        carWithoutTurbo.accelerate(100);

        expect(carWithoutTurbo.getStatus()).toContain('100 km/h');
    });
})