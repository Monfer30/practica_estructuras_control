// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function edadParaVotar(edad){
    if (edad >= 18) {
      console.log("Puede votar");
    } else {
      console.log("No puede votar");
    }
  }
  
  edadParaVotar(15);

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

let español;
let matematicas;
let historia;
let geografia;

const calificaciones = español + matematicas + historia + geografia;

function promedioAlumno(calificaciones){
  if(calificaciones >= 7){
    console.log("aprobado")
  } else {
    console.log("reprobado")
  }
}

promedioAlumno(5);

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function esDivisible(numero){
    if(numero % 7 === 0 && numero % 8 === 0){
      console.log("verdadero");
    } else {
      console.log("falso");
    }
  }
  
  esDivisible(56);


/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */


const numero = Math.floor(Math.random() * 100) + 1;
console.log("numero aleatorio generado:"+ numero)
function esDivisible(numero){
    if(numero % 4 === 0 || numero % 9 === 0){
      console.log("verdadero");
    } else {
      console.log("falso");
    }
}

esDivisible(numero);



/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

let num1 = 15;
let num2 = 25;

function calcular(operador, num1, num2){
    switch (operador) {
        case 1:
            return num1 + num2;
        case 2:
            return num1 - num2;
        case 3: 
            return num1 * num2;    
        case 4:
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "no se puede dividir por cero";
            }
        default:
            return "operacion invalida";
    }
}

console.log(calcular(3, num1, num2));



/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function peliculas(categorias) {
    switch (categorias) {
        case "romance":
            console.log("Orgullo y Prejuicio");
            break;
        case "terror":
            console.log("El exorcista");
            break;
        case "comedia":
            console.log("Whitechicks");
        case "accion":
            console.log("Mision imposible");
        case "suspenso":
            console.log("Suspira");
        case "drama":
            console.log("El efecto mariposa")
        default:
            console.log("categoria no disponible");
    }
}

peliculas("romance");

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

function cajero(operacion) {
    switch (operacion) {
        case 1:
            console.log("Retirar dinero");
            break;
        case 2:
            console.log("Transferencia");
            break;
        case 3:
            console.log("Deposito");
            break;
        case 4:
            console.log("Pago de servicios");   
            break;
        default:
            console.log("operacion no valida");
    }
}

cajero(3);



/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * switch
 */
let divisa;
let conversion;

function convertirDivisas(divisas) {
    switch (divisas) {
        case "Dolares":
            return  0.059;
        case "Euros":
            return 
        case "yen":
            return
        case "Libra":
            return
        case "Franco Suizo":
        return            

        default:
            console.log("divisa no disponible");
    }
}

pesos("Dolares");

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */