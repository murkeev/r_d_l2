const strings = ["banana", "apple", "cherry", "apricot"];
const numbers = [1, 2, 3];
const booleans = [true, false, true];
const any = ["text", 42, false, null, "hello", 7, true, null];

//forEach
strings.forEach((str, i) => console.log(`strings[${i}] = "${str}"`));

//map
const upperStrings = strings.map(s => s.toUpperCase());
const squaredNumbers = numbers.map(number => number * number);

console.log("strings → upper:", upperStrings);
console.log(squaredNumbers);

//filer
const trueValues = booleans.filter(Boolean);

console.log(trueValues);

//indexOf
console.log("IndexOf 42: ", any.indexOf(42))

//sort
const sortedStringsDesc = [...strings].sort((a, b) => b.localeCompare(a));

console.log(sortedStringsDesc);

//reduce
const trueCount = booleans.reduce((a, b) => a + (b ? 1 : 0), 0);

console.log("count of TRUE values: ", trueCount);

//concat
const mixedConcat = booleans.concat(any);

console.log(mixedConcat);

//groupBy
console.log({...Object.groupBy(numbers, n => n % 2 === 0 ? "even" : "odd")});