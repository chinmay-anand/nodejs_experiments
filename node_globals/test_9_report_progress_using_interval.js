const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;
let progressbar = "..."

const incTime = () => {
    currentTime += waitInterval
    const perc = Math.floor((currentTime/waitTime)*100);
    process.stdout.clearLine(); // clear the curren tline
    process.stdout.cursorTo(0); // move cursor to first character postiion
    //progressbar += '...'
    //process.stdout.write(`${progressbar}`); //write the line with percent completed
    process.stdout.write(`Waiting ... ${perc}%`); //write the line with percent completed
};

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine(); // clear the curren tline
    process.stdout.cursorTo(0); // move cursor to first character postiion
    console.log("Done");
};

console.log(`Setting a ${waitTime/1000} delay.`);

const interval = setInterval(incTime, waitInterval); 
// Here timeout completes but interval ticker continues for ever till CTRL+C is pressed
// We need to clear the interval after the timeout delay so as to stop the indefinite process

setTimeout(timerFinished, waitTime); // Now the process will run asynchronously for the duration of waitTime milli seconds

// Here we captured the interval object and cleared it in the timeout listener method so that interval click stops after timeout