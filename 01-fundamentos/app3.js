const fs = require("fs"); /*fs =  file system */

const content = fs.readFileSync("../README.md", "utf8");

const wordCount = content.split(" ").length;

console.log(wordCount);
