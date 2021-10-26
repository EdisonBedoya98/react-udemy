// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// Esto es el optional chaining
const cuenta = 10;

const mensaje = cuenta < 0 ? "no tienes saldo segun ternario" : "tienes saldo segun ternario";

// Si la condición se cumple se le asigna Hola
const mensaje1 = cuenta < 0 && "Hola";
// let mensaje;

// if(cuenta < 0)  mensaje = "no tienes saldo";
// else mensaje = "tienes saldo";

document.write(mensaje);
document.write(mensaje1);
