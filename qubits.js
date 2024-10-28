const flechaHorizontalDobleCabeza = '\u2194'; // ↔
const flechaVerticalDobleCabeza = '\u2195';   // ↕ 

console.log(flechaHorizontalDobleCabeza); // Salida: ↔
console.log(flechaVerticalDobleCabeza);   // Salida: ↕

const bits= [0,1];
var ingresoDe_Bits = parseInt(prompt("cuantos bits quieres:  ") );
for (let i = 0; i < ingresoDe_Bits; i++) {
let varnumeros = bits[Math.floor(Math.random() * bits.length)];
//console.log(varnumeros);

//var ingresoDe_Bits= [ ];
//console.log(ingresoDe_Bits);