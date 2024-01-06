import fs from "fs";

let outputMessage = "";
const base = 5;
const header = `
===============================
     Tabla del ${base}
===============================\n
`;

for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${5 * i}\n`;
}

outputMessage = header + outputMessage;

const outputPath = "outputs";

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("Archivo creado");
