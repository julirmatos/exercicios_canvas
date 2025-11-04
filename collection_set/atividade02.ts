import * as readlineSync from "readline-sync";


const numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];


console.log("Índices:  0  1  2  3  4  5  6  7  8  9");
console.log("Array:   ", numeros.join("  "));


const numeroProcurado = Number(
    readlineSync.question("\nDigite o número que você deseja encontrar: ")
);

const posicao = numeros.indexOf(numeroProcurado);

if (posicao !== -1) {
    console.log(`\nO número ${numeroProcurado} está localizado na posição: ${posicao}`);
} else {
    console.log(`\nO número ${numeroProcurado} não foi encontrado!`);
}
