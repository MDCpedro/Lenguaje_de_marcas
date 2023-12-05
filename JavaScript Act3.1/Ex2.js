const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

rl.question('Elige un tipo de temperatura C(celsius)/F(fahrenheit)', cuandoElUsuarioHayaEscritoPorTeclado);

function cuandoElUsuarioHayaEscritoPorTeclado(answer) {

    let tipotemperatura = answer;

    if (tipotemperatura == "C" || tipotemperatura == "c") {
        rl.question('Cuantos grados celsius de temperatura hay: ', (gradosCelsius) => {
            let gradosFahrenheit = gradosCelsius * 1.8 + 32;
            console.log(`Hacen ${gradosCelsius} ºC y ${gradosFahrenheit} ºF.`);
            rl.close();
        });
        if (tipotemperatura == "F" || tipotemperatura == "f") {
            rl.question('Cuantos grados farenheit hay: ', (gradosFahrenheit) => {
                let gradosCelsius = (gradosFahrenheit - 32) / 1.8;
                console.log(`Hacen ${gradosCelsius} ºC y ${gradosFahrenheit} ºF.`);
                rl.close();
            })
        }
    } else {
        console.log('Opción no válida.');
        rl.close();
    };
}