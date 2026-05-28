import {sumArrayFunc} from "./sumArrayFunc";
import {sumArrayArrow} from "./arrow-function";

const stringArray = ["Hello", ", ", "World", "!", " Robot", "_", "Dreams!"];
const numberArray = [10, 20, 30, 40, 50];

console.log("Result array of String as simple func:", sumArrayFunc(stringArray));

console.log("Result array of Numbers as simple func:", sumArrayFunc(numberArray));



console.log("\nResult array of String as arrow-func:", sumArrayArrow(stringArray));

console.log("Result array of Numbers as arrow-func:", sumArrayArrow(numberArray));