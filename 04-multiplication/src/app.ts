const fs = require("fs");

// console.log("================================");
// console.log("\t Tabla del 5 ");
// console.log("================================\n");
// for (let i = 1; i <= 10; i++) {
//   console.log(`5 x ${i} = ${5 * i}`);
// }

// Contenido que deseas escribir en el archivo
const contenido = `
===============================
     Tabla del 5
===============================

5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
`;

// Ruta y nombre del archivo que deseas crear
const rutaArchivo = "./outputs/tabla-5.txt";

// Método para escribir en el archivo
fs.writeFile(rutaArchivo, contenido, (err: any) => {
  if (err) {
    console.error("Error al crear el archivo:", err);
  } else {
    console.log("Archivo creado exitosamente.");
  }
});
