const fs = require('fs')

fs.readFile('./Ex4.js', 'utf-8', (error, datos) => {
    if (error) {
        console.log('error al leer', error)
    } else {
        console.log(datos)
    }
});
