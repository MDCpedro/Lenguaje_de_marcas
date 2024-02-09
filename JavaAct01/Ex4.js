const fs = require('fs')
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('Escribe la ruta del archivo: ', (rutaescrita) => {
    ruta(rutaescrita);
});

function ruta(rutaescrita) {
    fs.readFile(`${rutaescrita}`, 'utf-8', (error, datos) => {
        if (error) {
            console.log('Error al leer el archivo', error);
        } else {
            console.log(datos);
        }
        rl.close(); 
    });
}