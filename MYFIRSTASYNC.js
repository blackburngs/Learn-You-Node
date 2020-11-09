const fs = require("fs");
let informations = process.argv[2];

function newLines(callback) {
  fs.readFile(informations, function (err, fileContents) {
    let newLine = fileContents.toString().split("\n").length - 1;
    console.log(newLine);
  });
}

newLines();
