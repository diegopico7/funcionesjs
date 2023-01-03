// ejercicio 1
// realice una funcion que sume 2 números

//forma numero 1
let numero1 = 10;
let numero2 = 20;

function sumar() {
  return numero1 + numero2;
}
console.log(sumar());

//forma numero 2 pasando parámetros

function sumar1(a, b) {
  return a + b;
}
console.log(sumar1(20, 20));

//ejercicio 2
//Realiza una funcion que dado 3 numeros, corrobore si la multiplicacion de los 2 primeros es igual al tercer numero

function numeros(a, b, c) {
  return a * b === c;
}
console.log(numeros(2, 3, 4));

////ejercicio 3
//realiza una funcion que dado 3 parametros los sume y devuelva su promedio

function promedio(a, b, c) {
  return (a + b + c) / 3;
}
console.log(promedio(3, 6, 1));

//ejercicio 4
//Calcular el porcentaje de capacidad de un estadio. Pasando por parámetro la capacidad y los asistentes.

function estadio(capacidad, asistentes) {
  return (asistentes * 100) / capacidad;
}

console.log(
  "la capacidad del estadio esta cubierta en un " + estadio(50000, 25000) + "%"
);

//ejercicio 5 concatenacion
//realiza una funcion que imprima un saludo con el nombre y apellido
function saludo(nombre, apellido) {
  return "¡Buen día" + " " + nombre + apellido + "!";
}
console.log(saludo("diego", "pico"));

//ejercicio 6
//ingreso de datos
//tomar la funcion anterior pero hacer con ingreso de dato por promt

// let nombre1 = prompt("ingrese su nombre");
// let apellido1 = prompt("ingrese su apellido");

// function saludar() {
//   return (
//     "Hola" +
//     " " +
//     nombre1 +
//     " " +
//     apellido1 +
//     "buen día" +
//     " " +
//     "como estas maquina"
//   );
// }

// console.log(saludar());

//ejercicio 7
//Programa una funcion que cuente el numeros de caracteres que tenemos en una cadena de texto

// let cad = prompt("ingrese su cadena");

// function contar() {
//   return cad.length;
// }

// console.log(contar());

//ejemplo con arrow function
// const contar = (cadena) => {
//   !cadena
//     ? console.log("no ingresaste nada")
//     : console.log(`la cadena ${cadena} tiene ${cadena.length} caracteres`);
// };
// contar("");

//ejercicio 8
//crea una funcion para contar el numero de veces que se repite una palabra  en un texto ej oh bela chau chau chau  el resultado sera 3

// const repeticion = (texto ="", rep) =>{
// (!texto)? console.log("no ingresaste texto")
// }

//ejercicio 9
// crea una funcion que invierta las palabras de una cadena de texto ejemplo "hola" resultado será aloh

function invertir(cadena) {
  return cadena.split("").reverse().join("");
}
console.log(invertir("hola"));

const invertir2 = (cadena) => {
  cadena
    ? console.log(cadena.split("").reverse().join(""))
    : console.log("no ingresaste nada");
};
console.log(invertir2(""));
//ejercicio 10
//crea una funcion que valide si una palabra dada, es un palíndromo (capicua q se lee de igual sentido que en otro) ejemplo paap
