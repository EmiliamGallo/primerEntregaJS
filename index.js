// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// let number = prompt("ingrese un número: ");

function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

let numero = prompt("Ingrese un número: ");
verificarParidad(numero);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor,
// y si ninguno lo es, indicar por consola que son iguales.

function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        console.log("El número " + numero1 + " es mayor que " + numero2);
    } else if (numero1 < numero2) {
        console.log("El número " + numero2 + " es mayor que " + numero1);
    } else {
        console.log("Los números son iguales");
    }
}

let numero1 = prompt("Ingrese el primer número: ");
let numero2 = prompt("Ingrese el segundo número: ");

compararNumeros(Number(numero1), Number(numero2));

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function numeroMultiploDe5(numero3) {
    if (numero3 % 5 === 0) {
        console.log("El numero es multipolo de 5")
    }
}
let numero3 = 15;
numeroMultiploDe5(numero3);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0
// hasta llegar a ese número.

function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}
imprimirNumerosHasta(10);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola
// esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabraNTimes(palabra, numero4) {
    for (let i = 0; i < numero; i++) {
        console.log(palabra);
    }
}
let palabra = "casa";
let numero4 = 3;
imprimirPalabraNTimes(palabra, numero4);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const arrays = [67, "Gato", true, 3.14, { huevo: false, harina: "almendras" }, 250];

function recibirArr(array) {
    for (let item of array) {
        console.log(item);
    }
}

recibirArr(arrays);

