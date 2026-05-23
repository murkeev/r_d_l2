const action = "start";
switch (action) {
    case "start":
        console.log("System is starting...");
        break;
    case "stop":
        console.log("System is stopping...");
        break;
    case "pause":
        console.log("System is paused.");
        break;
    default:
        console.log("Unknown command.");
}