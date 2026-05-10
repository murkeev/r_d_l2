let isOnline = true;
let age = 21;
let userName = "Denys";
let emptyValue = null;
let notAssigned;

console.log(age > 18);
console.log(age < 10);
console.log(age == "21");
console.log(age === "21");
console.log(userName != "Alex");

console.log(isOnline && age > 18);
console.log(isOnline || false);
console.log(!isOnline);

console.log(emptyValue == notAssigned);
console.log(emptyValue === notAssigned);