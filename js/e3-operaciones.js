//SUMAN DOS NUMEROS
//Sumar el precio de tomates y manzanas
let precioTomates1 = 2.8;
let precioManzanas1 = 1.5;
let precioTotal;

precioTotal = precioTomates1 + precioManzanas1;

document.write("Sumar dos numeros: La suma del precio de los tomates " + precioTomates1);
document.write(" mas el precio de las manzanas " + precioManzanas1);
document.write(" es en total: " + precioTotal);
document.write("<br/>");

//RESTAR DOS NUMERO
//Restarle a los tomates el descuento
let descuento = 1;
let precioTomates1Descuento;

precioTomates1Descuento = precioTomates1 - descuento;
document.write("Restar dos numeros: La resta del precio de los tomates tomates " + precioTomates1);
document.write(" menos el descuento " + descuento);
document.write(" seria: " + precioTomates1Descuento);
document.write("<br/>");

//MULTIPLICAR DOS NUMEROS
//Calcular el precio de 5 kilos de manzanas.
let kilosManzanas1 = 5;
let precioMultiplicacion;

precioMultiplicacion = kilosManzanas1 * precioManzanas1;
document.write("Multiplicar dos numeros: El precio total de " + kilosManzanas1 + " kilos de manzanas ");
document.write(" a un precio de " + precioManzanas1);
document.write(" seria en total: " + precioMultiplicacion);
document.write("<br/>");

//DIVIDIR DOS NUMEROS
//Calcular la mitad del precio de las manzanas.
let mitad = 2;
let mitadPrecio = precioManzanas1 / mitad;

document.write("Dividir dos numeros: El resultado de dividir el precio de las manzanas " + precioManzanas1 );
document.write(" entre " + mitad);
document.write(" seria en total: " + mitadPrecio);
document.write("<br/>");

//COMBINAR VARIAS OPERACIONES
//Usar parentesis en las operaciones que querais hacer primero.
let notaExamen1 = 5.6;
let notaExamen2 = 8.2;
let notaExamen3 = 6.5;
let totalExamenes = 3;
let notaMedia;

notaMedia = (notaExamen1 + notaExamen2 + notaExamen3)/totalExamenes;
document.write("Combinar varias operaciones: La media de los examenes " + notaExamen1 + " " + notaExamen2 + " " + notaExamen3 );
document.write(" seria en total: " + notaMedia);
document.write("<br/>");

//OPERADORES INCREMENTO Y DECREMENTO
//++ suma uno cada vez que se usa, y el -- resta uno cada vez que se usa.
let numeroIntentos = 5;
document.write("El numero de intentos es " + numeroIntentos);
document.write("<br/>");
numeroIntentos++;
numeroIntentos++;
document.write("El numero de intentos incrementado es " + numeroIntentos);
document.write("<br/>");
numeroIntentos--;
document.write("El numero de intentos decrementado es " + numeroIntentos);
document.write("<br/>");