export function sumArrayFunc(arr: number[] | string[]): number | string {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = (result as any) + arr[i];
    }
    return result;
}


