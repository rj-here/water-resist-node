const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function intro() {
    console.log("Welcome! This is a simple app about water resistance, a concept that intrigues me a little bit. The other objective: getting familiar with Node.js. I hope you enjoy it!");
    main();
}

function main() {
    console.log("Let's get started!");
    console.log("This app will help you understand water resistance in a fun and interactive way.");
    console.log("What would you like to learn? Type a number based on what comes next:");
    options();
}

function options() {
    console.log("Please choose an option:");
    console.log("0: EXIT!")
    console.log("1: Learn about IP code basics");
    console.log("2: Meaning of each digit in the IP code");
    console.log("3: Examples of IP codes");
    rl.question("Enter your choice (0-3): ", function(choice) {
        switch (choice) {
            case '0':
                exit();
                break;
            case '1':
                learnIPBasics();
                break;
            case '2':
                learnIPDigits();
                break;
            case '3':
                learnIPExamples();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                options();
        }
    });
}

function exit() {
    console.log("Thank you for using the app! Goodbye!");
    process.exit(0);
}

function learnIPBasics() {
    console.log("IP code, or Ingress Protection code is a standard to indicate device protection against water and dust.")
    console.log("defined by International Electrotechnical Commission under IEC 60529.");
    console.log("The digits indicate conformity with conditions summarized. Also, no hyphens!");
}
intro();