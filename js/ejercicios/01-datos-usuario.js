//Escribir un algoritmo para pedir nombre, apellido y edad de un usuario y mostrarlo por pantalla

const nombre = prompt("Ingresa un nombre: ");
const apellido = prompt("Ingresa un apellido: ");
const edad = parseInt(prompt("Ingresa una edad: "));
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(typeof apellido);
console.log(typeof edad);

// alert(
//   "Los datos ingresados son: " +
//     apellido +
//     ", " +
//     nombre +
//     " - Edad: " +
//     edad +
//     " años",
// );
alert( `Los datos ingresados son: ${apellido} , ${nombre} - Edad: ${edad} años` );
