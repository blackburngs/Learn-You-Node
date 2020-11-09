const fs = require("fs");

let informations = fs.readFileSync(process.argv[2]);
let newLines = informations.toString().split("\n").length - 1;

console.log(newLines);
