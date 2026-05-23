let temperature = 12;
let isRaining = true;

if (temperature > 0) {
    console.log("Temperature is above zero");
}

if (temperature >= 25 && !isRaining) {
    console.log("Great weather for a walk");
} else if (temperature >= 10 && isRaining) {
    console.log("It is cool and raining outside");
} else if (temperature < 10) {
    console.log("It is cold outside");
} else {
    console.log("The weather is normal");
}