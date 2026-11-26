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
console.log(numero);
console.log(numero % 2);
// parseInt('6') => NaN (esto no es un numero)
// isNaN(variable)
// isNaN('hola') = true
// isNaN(9) = false

//quiero preguntar si numero ES UN NUMERO
// ! NOT
// !true == false
// !false == true
//isNaN('hola') == !false
if (!isNaN(numero)) {
  if (numero % 2 === 0) {
    console.log("El numero ingresado es par");
  } else {
    console.log("El número ingresado es impar");
  }
}else{
    alert('Debes ingresar un número')
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
