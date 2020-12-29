const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval
    console.log(`Waiting for ${currentTime/1000} seconds.`);
};

const timerFinished = () => {
    clearInterval(interval);
    console.log("Done");
};

console.log(`Setting a ${waitTime/1000} delay.`);

const interval = setInterval(incTime, waitInterval); 
// Here timeout completes but interval ticker continues for ever till CTRL+C is pressed
// We need to clear the interval after the timeout delay so as to stop the indefinite process

setTimeout(timerFinished, waitTime); // Now the process will run asynchronously for the duration of waitTime milli seconds

// Here we captured the interval object and cleared it in the timeout listener method so that interval click stops after timeout