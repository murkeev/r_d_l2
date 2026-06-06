import {Yacht} from "../src/lesson_9/classes/yacht";


let yacht: Yacht;

describe('Yacht', () => {
    beforeEach(() => {
        yacht = new Yacht(
            "Beneteau",
            "Oceanis 51",
            2021,
            200,
            180,
            10,
            true);
    })
    it('should not exceed 20 knots when sails are enabled', () => {
        yacht.start();
        yacht.accelerate(100);

        expect(yacht.getStatus()).toContain('20 knots');
    });

    it('should not exceed 35 knots when sails are disabled', () => {
        const yachtWithoutSails = new Yacht(
            "Beneteau",
            "Oceanis 51",
            2021,
            200,
            180,
            10,
            false);

        yachtWithoutSails.start();
        yachtWithoutSails.accelerate(100);

        expect(yachtWithoutSails.getStatus()).toContain('35 knots');
    });
})