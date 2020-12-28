// Use CTRL + BACK TICK to open command prompt within vs code
// ----------------------------------------------------------


// Use BACK TICK to pass values within a template string 
// -----------------------------------------------------
let hello = "Hello World"
console.log(hello); // usign string variable
console.log(`1. ${hello}`); // Using string template

// Using global variable and path module
// -------------------------------------
path = require("path");
console.log(`__dirname = ${__dirname}`); // Using global onjects
global.console.log(`__filename = "${__filename}"`); // console is same as global.console - a global object
console.log(`filename = "${path.basename(__filename)}"`); // path.basename returns the leafnode of a directory or file path

// Using global "process" object to pass arguments
// -----------------------------------------------
console.log(process.argv0); // prints node executable path
console.log(process.argv); // prints a list of argument strings 1st is the node.exe with path, 2nd is the js file invoked 3rd onwards are parameters passed into the js file as parameter
[,,p,q,r] = process.argv; // on left side of assignment we are skipping first two arguments which are node and js file names
console.log (p,q); // print firt two parameters to js file (i.e. 3rd and 4th member of argv array)
console.log(process.pid); // prints process id of the application
console.log(process.versions.node); // Prints nodejs version (same as node -v)

// Using values of pre-recognised parameters
// -----------------------------------------
const getArg = flag => {
    let indexAfterFlag = process.argv.indexOf(flag);
    console.log(indexAfterFlag);
    return process.argv[indexAfterFlag + 1]; 
    // +1 means paramet next to the passed in flag, +2 means param 1 word after the passed in flag and so on
    // On command line you may use quotation mark to pass multi-word flag values
};
console.log(`The "name" flag has value \"${getArg("--name")}\"`);