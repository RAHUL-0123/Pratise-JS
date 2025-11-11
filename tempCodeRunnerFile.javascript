const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your age: ", (input) => {
    let a = Number.parseInt(input);

    if (isNaN(a) || a <= 0) {
        console.log("You have entered an invalid age.");
    } 
    else if (a > 0 && a <= 13) {
        console.log("You are a kid.");
    } 
    else if (a > 13 && a <= 17) {
        console.log("You are a teenager.");
    } 
    else {
        console.log("You are above 18 and can vote.");
    }

    rl.close();
});
