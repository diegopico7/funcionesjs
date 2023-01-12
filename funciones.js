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
//forma 3 ingresando nosotros mismo los numeros por pantalla

// let n1 = parseInt(prompt("ingrese su numero1"));

// let n2 = parseInt(prompt("ingrese su numero2"));

// function sumar2() {
//   return console.log(n1 + n2);
// }
// sumar2();

//ejercicio 2
//Realiza una funcion que dado 3 numeros, corrobore si la multiplicacion de los 2 primeros es igual al tercer numero

function numeros(a, b, c) {
  return a * b === c;
}
console.log(numeros(2, 3, 4));

////ejercicio 3
//realiza una funcion que dado 3 parametros los sume y devuelva su promedio

// function promedio(a, b, c) {
//   return (a + b + c) / 3;
// }
// console.log(promedio(3, 6, 1));

// //ejercicio 4
// //Calcular el porcentaje de capacidad de un estadio. Pasando por parámetro la capacidad y los asistentes.

// function estadio(capacidad, asistentes) {
//   return (asistentes * 100) / capacidad;
// }

// console.log(
//   "la capacidad del estadio esta cubierta en un " + estadio(50000, 25000) + "%"
// );

//ejercicio 5 concatenacion
//realiza una funcion que imprima un saludo con el nombre y apellido
// function saludo(nombre, apellido) {
//   return "¡Buen día" + " " + nombre + apellido + "!";
// }
// console.log(saludo("diego", "pico"));

//ejercicio 6
//tomar la funcion anterior pero hacer con ingreso de dato por pantalla

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
//crea una funcion para contar el numero de veces que se repite una palabra  en un texto ej oh bela chau chau chau  el resultado para chau sera 3

// const repeticion = (cadena = "", texto = "") => {
//   if (!cadena) return console.log("no ingresaste texto largo");
//   if (!texto) return console.log("no ingresaste palabra");
//vamos a iniciar una variable para usarla como contador y con la variable i vamos a controlar ese contador
// let i = 0;
// let contador = 0;
//vamos a usar un while y no un doWhile por que el doWhile ejecuta aunque sea 1 vez el codigo y el indexOf que nos permite controlar un texto dentro de otra cadena de texto y nos devolvera la posicion donde encontro ese texto o caracter
//por que ejecutamos el while con la condicion -1 por que el indexOf si no encuentra el texto a buscar devuelve -1

//   while (i !== -1) {
//     i = cadena.indexOf(texto, i);
//     if (i !== -1) {
//       i++;
//       contador++;
//     }
//   }
//   return console.log(`la palabra ${texto} se repite ${contador} veces`);
// };

// repeticion("hola");
// repeticion("", "d");
// repeticion("hola mundo chao mundo hello mundo sayonara mundo", "mundo");

//ejercicio 9
// crea una funcion que invierta las palabras de una cadena de texto ejemplo "hola" resultado será aloh

// function invertir(cadena) {
//   return cadena.split("").reverse().join("");
// }
// console.log(invertir("hola"));

// const invertir2 = (cadena) => {
//   cadena
//     ? console.log(cadena.split("").reverse().join(""))
//     : console.log("no ingresaste nada");
// };
// console.log(invertir2(""));

//ejercicio 10
//crea una funcion que valide si una palabra dada, es un palíndromo (capicua q se lee de igual sentido que en otro) ejemplo salas
// vamos a explicar lo que usamos palabra.split para convertirla en un arreglo no le damos espacio para que cada caracter sea 1 posicion luego usamos el metodo reverse() y luego volvemos a unir para que vuelva a ser una sola palabra con el .join("") tampoco le pasamos un separador
// const palin = (palabra) => {
//   palabra === palabra.split("").reverse().join("")
//     ? console.log(`la palabra ${palabra} es palíndromo `)
//     : console.log("no es palindromo");
// };
// palin("paap");

//11  programa una funcion que elimine cierto patron de caracteres de un texto dado ejemplo (abc1, abc2, abc3, abc4) y tiene que devolver "1, 2, 3, 4"

//vamos a usar replace

// const eliminarCaracteres = (texto = "", patron = "") => {
//   !texto
//     ? console.log("no ingresaste texto")
//     : !patron
//     ? console.log("no ingresaste un patron de caracteres")
//     : console.log(texto.replace(new RegExp(patron, "ig"), ""));
// };
//con replace reemplazamos y tenemos que pasar 2 parametros el 1 el parametro que queremos analizar y el 2 el parametro que queremos que reemplace al 1. si no queremos eliminarlo que no aparezca nada simplemente le dejamos "" vacio. El primer parametro vamos a hacer una expresion regular
//new regExp creamos  una instancia de un objeto de tipo expresion regular para que evalue el patron a buscar y vamos a pasarle las banderas ig (i=evita que distinga entre mayus y minusculas y g= no se detiene en la primera coincidencia)
// eliminarCaracteres();
// eliminarCaracteres("abc1");
// eliminarCaracteres("abc1, abc2, abc3, abc4", "ab");

//12 tenemos una url y necesitamos el ultimo valor ejemplo "https:/www.api.com/people/9/"" queremos acceder al id 9
// lo primero sera convertir con el metodo split a un arreglo (array) separado por el caracter que pongamos entre los parentesis en este casi la /, luego si queremos el ultimo elemento le agregamos un pop() pero si usamos un .slice nos devolvera un array segun lo q introduzcamos por argumento ("") en este caso a tener -2 (nos devolvera un array de 2 posiciones y las 2 ultimas) en el primer argumento nos devuelve "9 y un espacio vacio" el 9 esta en la posicion 0 asi que igualamos en el 2 argumento con [ la posicion 0]
// const url = "https:/www.api.com/people/9/5";

// function getId(data) {
//   return data.split("/").slice(-2)[0];
// }
// console.log(getId(url));

// function getID1(data) {
//   return data.split("/").slice(-3)[1];
// }
// console.log(getID1(url));

//

//Metodos  varios

//const metodos = ["pera", "manzana", "uva", "sandia"];
// const metodosString = "Una cadena de texto";
//function met(data) {
// return data.join("/*"); // devuelve una cadena de texto si dejamos espacios dara espacios si no todo junto depende que pasemos por parametro
//return data.slice(1); //recorta desde la posicion que indiquemos en este caso recorta desde la posicion 1 quedaria manzana uva sandia
//return data.pop(); //tra el ultimo elemento en este caso sandia
//return data.split(""); //transforma una cadena de texto en array si no damos espacio es un array de 1 posicion si damos espacios cada caracter sera una posicion
//return data.join(","); //transforma un array en cadena de texto si no le damos espacios sera todo una sola cosa podemos pasar parametros dentro de los ( )
//}

//console.log(met(metodos));
// console.log(met(metodosString));
