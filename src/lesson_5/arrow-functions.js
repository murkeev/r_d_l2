const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr);
};

const stringArray = ["Hello", ", ", "World", "!", " Robot", "_", "Dreams!"];
const numberArray = [10, 20, 30, 40, 50];

console.log("Result array of String:", sumArray(stringArray));

console.log("---");

console.log("Result array of Numbers:", sumArray(numberArray));