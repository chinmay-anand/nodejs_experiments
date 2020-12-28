// Using process.stdout inplace of console.log to have better control over newlines in output
process.stdout.write("Hello");
process.stdout.write(" Chinmay\n\n");
// we can use process.stdout.write() to print multiple statements into a single line
// console.log() prints a new line after priting the string parameter passed.

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your favorite language?"
];

const ask = (i=0) => {
    process.stdout.write(`\nHey ${questions[i]}`);
    process.stdout.write (` > `);
};
ask();

// This is a synchronous program as ti completes after executign the written statements in the code
// We will make it asynchronous by adding listener to listen from stdin