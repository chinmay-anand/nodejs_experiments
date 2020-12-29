const waitTime = 3000;
console.log(`Setting a ${waitTime/1000} delay.`);

const timerFinished = () => {
    console.log("Done");
};

setTimeout(timerFinished, waitTime); // Now the process will run asynchronously for the duration of waitTime milli seconds
