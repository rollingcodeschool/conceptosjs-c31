/* condicinal if
condicional simple
if( condicion logica ){
    todas las lineas de codigo que quiero hacer si se cumple la condicion
}

condicional doble
if( condicion logica ){
    todas las lineas de codigo que quiero hacer si se cumple la condicion
}else{
     todas las lineas de codigo que quiero hacer si No se cumple la condicion
}
*/

// Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y determinar si es par o impar. Mostrar el resultado.

const numero = parseInt(prompt("Ingresa un número: "));

console.log(numero)
console.log(numero % 2 )
if (numero % 2 === 0) {
  console.log("El numero ingresado es par");
} else {
  console.log("El número ingresado es impar");
}

/* 
Ejemplo de operadores
A= 0
B= '0'

if( 0 != '0'){
    console.log('los ceros son iguales')
}else{
     console.log('los valores no son iguales')
}
*/

