import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const {b:base, l:limit, s:showTable} = yarg

let outputMessage = "";
// const base = yarg?.b;
const header = `
===============================
     Tabla del ${base}
===============================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = header + outputMessage;

const outputPath = "outputs";

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

if (showTable){
  console.log(outputMessage);
}
console.log("Archivo creado");
