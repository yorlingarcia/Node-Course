const fs = require("fs");

const data = fs.readFileSync("../README.md", "utf8");

const newData = data.replace(/Fernando/gi, "Yorlin");

fs.writeFileSync("README-Yorlin.md", newData);

console.log(newData);
