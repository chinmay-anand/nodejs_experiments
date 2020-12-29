const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your favorite language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n${questions[i]}`);
    process.stdout.write (` > `);
};
ask(); // default param to ask is i=0, so first question is asked here

const answers = [];
process.stdin.on("data", in_data => {
    answers.push(in_data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length); 
    } else {
        // All questions are answered answers.length is now same as questions.length
        process.exit(); // This termination condition can be captured by using 'exit' listener process.on("exit", ..)
    }
});

// The below "exit" event fires whenever the process is about to exit (by calling process.exit())
process.on("exit", () => {
    const [name, activity, lang] = answers;
    console.log(`

    Thank you for your answers.

    Go ${activity} ${name}, you can write ${lang} code later!!!

    `);
});

// SIGINT listener captures CTRL+C
process.on("SIGINT", () => {
    console.log(`Caught interrupt signal!  Try once more.`);
    ask(answers.length); 
});