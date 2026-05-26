export function sumArrayArrow(arr: number[] | string[]) : number | string {
    return arr.reduce((acc, currentValue) => (acc as any) + currentValue);
}