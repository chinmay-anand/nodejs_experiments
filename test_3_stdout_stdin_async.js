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
ask(); // default param to ask is i=0

// We will make it asynchronous by adding listener to listen from stdin using process.stdin.on()
// using the process as standard input object to listen for data objects and thus making a aynchronous application
process.stdin.on("data", in_data => {
    //process.stdout.write(`\n\n ${in_data}`);
    process.stdout.write(`\n\n ${in_data.toString().trim()} \n`);
    //process.exit(); //Without this exit() the process continues indefintely to listen on stdin for our input
});
// The above program will not exit and will continue to listen for the lines we type on console till we press CTRL+C
// We need to exit explicitly using process.exit() inside the listener
