let numeros = [1, 5, 7, 3, 8];

let index = 0;
let mayornum = -9999999;
let menornum = 9999999;
let sumatotal = 0;

while (index < numeros.length) {
    let numactual = numeros[index];
    sumatotal = sumatotal + numactual;
    if (numactual > mayornum) {
        mayornum = numactual;
    }
    if (numactual < menornum) {
        menornum = numactual;
    }
    index++;
}
let media = sumatotal / numeros.length;
console.log(`La suma total es ${sumatotal}, la media es de ${media}, el mayor numero ha sido ${mayornum} y el menos ${menornum}`);