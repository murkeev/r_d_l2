function sumArray(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}

const stringArray = ["Hello", ", ", "World", "!", " Robot", "_", "Dreams!"];
const numberArray = [10, 20, 30, 40, 50];

console.log("Result array of String:", sumArray(stringArray));

console.log("---");

console.log("Result array of Numbers:", sumArray(numberArray));