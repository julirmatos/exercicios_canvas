import * as readlineSync from "readline-sync";

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log("Índices:  0  1  2  3  4  5  6  7  8  9");
console.log("List:    ", Array.from(numeros).join("  "));

const numeroProcurado = Number(
    readlineSync.question("\nQual número deseja encontrar? : ")
);

// Verifica se o número está presente no Set
if (numeros.has(numeroProcurado)) {
    console.log(`\nO número ${numeroProcurado} foi encontrado! Parabéns!`);
} else {
    console.log(`\nO número ${numeroProcurado} não foi encontrado!Que pena!`);
}
