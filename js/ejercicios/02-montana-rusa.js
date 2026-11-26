/*
Un parque de diversiones necesita programar el molinete de su nueva montaña rusa. Para que una persona pueda subir, debe cumplir con las siguientes reglas de seguridad:

Tener 12 años o más Y medir al menos 140 cm de altura.

O BIEN, estar acompañada por un adulto (sin importar su edad o altura).
*/

const edad = parseInt(prompt('Ingresa una edad: ')) 
const altura = parseFloat(prompt('Ingresa una altura en cm: ')) 
const acompanadoPorAdulto = prompt('¿Esta acompañado por un adulto? - (si o no)')

//operadores logicos
// ! Not
// && AND (y)
// || OR (o)

if( (edad >= 12 && altura >= 140) || acompanadoPorAdulto=== 'si'){
    console.log('✅ puedes subir')
}else{
     console.log('❌ No puedes subir')
}


