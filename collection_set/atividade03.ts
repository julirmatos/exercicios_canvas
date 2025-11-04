import * as readlineSync from "readline-sync";

const numeros: Set<number> = new Set<number>();

console.log("Digite 10 números inteiros (não repetidos):");

while (numeros.size < 10) {
    const numero = Number(readlineSync.question(`Digite o ${numeros.size + 1}º número: `));

    if (numeros.has(numero)) {
        console.log("\n Este número já foi adicionado! Insira um número diferente .\n");
    } else {
        numeros.add(numero);
    }
}

console.log("\nListar dados do Set:\n");
numeros.forEach((num) => console.log(num));
