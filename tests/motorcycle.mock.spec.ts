import {Motorcycle} from "../src/lesson_9/classes/motorcycle";
import {describe, it, expect, vi, beforeEach} from "vitest";

let bike: Motorcycle;

describe('motorcycle with mocking', () => {
    beforeEach(() => {
        bike = new Motorcycle("Ducati",
            "Panigale V4",
            2022,
            16,
            14,
            1100);
    })

    it('isHighPerformance should return false when mocked', () => {
        vi.spyOn(bike, "isHighPerformance").mockReturnValue(false);

        expect(bike.isHighPerformance()).toBe(false);
    })

    it('getSummary should use mocked values from its dependencies', () => {
        const spyCategory = vi.spyOn(bike, "getEngineCategory").mockReturnValue("cruiser");
        const spyMaxSpeed = vi.spyOn(bike, "getMaxSpeed").mockReturnValue(999);

        const result = bike.getSummary();

        expect(result).toContain("cruiser");
        expect(result).toContain("999");
        expect(spyCategory).toHaveBeenCalledTimes(1);
        expect(spyMaxSpeed).toHaveBeenCalledTimes(1);
    })

    it('brake should be called with the given argument', () => {
        const spyBrake = vi.spyOn(bike, "brake");
        bike.brake(30)

        expect(spyBrake).toHaveBeenCalledWith(30);
    })

    it('getFullReport should use mocked values from its dependencies', () => {
        const spyStatus = vi.spyOn(bike, "getStatus").mockReturnValue('mockStatus');
        const spySummary = vi.spyOn(bike, "getSummary").mockReturnValue('mockSummary');

        const result = bike.getFullReport();

        expect(result).toContain("mockStatus");
        expect(result).toContain("mockSummary");
        expect(spyStatus).toHaveBeenCalledTimes(1);
        expect(spySummary).toHaveBeenCalledTimes(1);
    })


    it('getStatus should use mocked values from its dependencies', () => {
        const spyDescribe = vi.spyOn(bike, "describe").mockReturnValue('mockDescribe');
        const spyGetFuelLevel = vi.spyOn(bike, "getFuelLevel").mockReturnValue(15);

        const result = bike.getStatus();

        expect(result).toContain("mockDescribe");
        expect(result).toContain("15.0L");
        expect(spyDescribe).toHaveBeenCalledTimes(1);
        expect(spyGetFuelLevel).toHaveBeenCalledTimes(1);
    })
});