import {Motorcycle} from "../src/lesson_9/classes/motorcycle";
import {expect} from "chai";
import {describe} from "mocha";

let bike: Motorcycle;

describe('motorcycle', () => {
    beforeEach(() => {
        bike = new Motorcycle("Ducati",
            "Panigale V4",
            2022,
            16,
            14,
            1100);
    })

    it('should have correct initial state', () => {
        expect(bike.getFuelLevel()).to.equal(14);
        expect(bike.numberOfWheels).to.equal(2);
        expect(bike.transmissionType).to.equal('manual');
    });

    it('should decrease fuel by 0.5 when started successfully', () => {
        bike.start();

        expect(bike.getFuelLevel()).to.equal(13.5);
    })

    it('should not change speed when not running', () => {
        bike.accelerate(30);

        expect(bike.getFuelLevel()).to.equal(14);
        expect(bike.getStatus()).to.include('0 km/h');
    });

    it('should accelerate to 115km/h when engine is 600cc or more ', () => {
        bike.start();
        bike.accelerate(100);

        expect(bike.getStatus()).to.include('115 km/h');
    });

    it('should not accelerate when out of fuel', () => {
        const lowFuelBike = new Motorcycle(
            "Ducati",
            "Panigale V4",
            2022,
            16,
            0.5,
            1100
        );

        lowFuelBike.start();
        lowFuelBike.accelerate(100);

        expect(lowFuelBike.getStatus()).to.include('0 km/h');
    });

    it('should return correct status string when running', () => {
        bike.start();
        bike.accelerate(100);

        expect(bike.getStatus()).to.include('Ducati');
        expect(bike.getStatus()).to.include('115 km/h');
        expect(bike.getStatus()).to.include('1100 cc');
        expect(bike.getStatus()).to.include('12.8L');
    });

    it('should not start when already running', () => {
        bike.start();
        bike.start();

        expect(bike.getFuelLevel()).to.equal(13.5);
    });

    it('should stop and reset speed when running', () => {
        bike.start();
        bike.accelerate(100);
        bike.stop();

        expect(bike.getStatus()).to.include('0 km/h');
    });

    it('should accelerate without speed  boost when engine is under 600cc', () => {
        const lowEngineBike = new Motorcycle(
            "Ducati",
            "Panigale V4",
            2022,
            16,
            14,
            400
        );

        lowEngineBike.start();
        lowEngineBike.accelerate(100);

        expect(lowEngineBike.getStatus()).to.include('100 km/h');
    })
});

