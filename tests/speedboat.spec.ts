import {Speedboat} from "../src/lesson_9/classes/speedboat";

let speedboat: Speedboat;

describe('Speedboat', () => {
    beforeEach(() => {
        speedboat = new Speedboat("Formula",
            "350 CBR",
            2023,
            300,
            280,
            8,
            425);
    })
    it('should accelerate with speed boost when horsepower more than 300', () => {
        speedboat.start();
        speedboat.accelerate(100);

        expect(speedboat.getStatus()).toContain('80 knots');
    });
})