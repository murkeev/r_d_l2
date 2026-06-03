export interface Refuelable {
    refuel(amount: number): void;

    getFuelLevel(): number;
}