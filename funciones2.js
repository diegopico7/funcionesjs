// //1 Sume 2 numeros

// let nume = 20;
// let nume2 = 30;
// function sumar() {
//   return nume + nume2;
// }
// console.log(sumar());

// //parametros

// function sumar3(a, b) {
//   return a + b;
// }

// console.log(sumar3(10, 25));

// // valores por pantalla

// let n1 = parseInt(prompt("ingrese su numero"));
// let n2 = parseInt(prompt("ingrese su 2 numero"));

// function su() {
//   return n1 + n2;
// }
// console.log(su());

//ejercicio 2
//Realiza una funcion que dado 3 numeros, corrobore si la multiplicacion de los 2 primeros es igual al tercer numero

// function corroborar(a, b, c) {
//   return a * b === c;
// }
// console.log(corroborar(2, 3, 4));

//ejercicio 3
//realiza una funcion que dado 3 parametros los sume y devuelva su promedio

// function promedio(a, b, c) {
//   return (a + b + c) / 3;
// }
// console.log(promedio(100, 100, 100));

//ejercicio 4
//Calcular el porcentaje de capacidad de un estadio. Pasando por parámetro la capacidad y los asistentes.

// function estadio(capacidad, asistentes) {
//   return (asistentes * 100) / capacidad;
// }

// console.log("El estadio y esta cubierto en un " + estadio(50000, 25000) + "%");

// const contar = (texto) => {
//   return texto.length;
// };
// console.log(contar("hola Mundo"));

//ejercicio8
//crea una funcion para contar el numero de veces que se repite una palabra  en un texto ej oh bela chau chau chau  el resultado para chau sera 3

// const repeticion1 = (cadena = "", texto = "") => {
//   if (!texto) return console.log("no ingresaste ningun texto");
//   if (!cadena) return console.log("no ingresaste ninguna cadena");

//   let i = 0;
//   let contador = 0;

//   while (i !== -1) {
//     i = cadena.indexOf(texto, i);
//     if (i !== -1) {
//       i++;
//       contador++;
//     }
//   }
//   console.log(`la palabra ${texto} se repite ${contador} veces`);
// };

// repeticion1("hola chau chau chau", "chau");

//ejercicio 9
// crea una funcion que invierta las palabras de una cadena de texto ejemplo "hola" resultado será aloh

// const reverse2 = (texto) => {
//   return texto.split("").reverse().join("");
// };

// console.log(reverse2("hola"));

//ejercicio 10
//crea una funcion que valide si una palabra dada, es un palíndromo (capicua q se lee de igual sentido que en otro) ejemplo salas

// const palindromo = (palabra) => {
//   if (palabra === palabra.split("").reverse().join("")) {
//     console.log("es palindromo");
//   } else console.log("no es palindromo");
// };
// console.log(palindromo("loll"));

// const palindromo2 = (palabra2) => {
//   return palabra2 === palabra2.split("").reverse().join("")
//     ? console.log("si es palindromoooo")
//     : console.log("no lo essss");
// };
// console.log(palindromo2("sala"));

//11  programa una funcion que elimine cierto patron de caracteres de un teto dado ejemplo (abc1, abc2, abc3, abc4) y tiene que devolver "1, 2, 3, 4"

const eliminar = (patron = "", texto = "") => {
  !patron
    ? console.log("no ingresaste patron")
    : !texto
    ? console.log("no ingresaste texto")
    : console.log(patron.replace(new RegExp(texto, "ig"), ""));
};

eliminar("hola, chau, queria", "hola");

const eliminarCaracteres = (texto = "", patron = "") => {
  !texto
    ? console.log("no ingresaste texto")
    : !patron
    ? console.log("no ingresaste un patron de caracteres")
    : console.log(texto.replace(new RegExp(patron, "ig"), ""));
};
eliminarCaracteres("hola chau chau hola", "hola");

const eliminar2 = (cadena = "", borrar = "") => {
  !cadena
    ? console.log("no ingresaste texto")
    : !borrar
    ? console.log("no ingresaste lo q vas a borrar")
    : console.log(cadena.replace(new RegExp(borrar, "ig"), ""));
};

eliminar2("bye bye my lord sir charles charles", "charles");
