import * as readlineSync from "readline-sync";

const cores: string[] = [];

for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`Digite a ${i + 1}ª cor: `);
    cores.push(cor);
}


console.log("\nListar todas as cores:\n");
cores.forEach((cor) => console.log(cor));


console.log("\nOrdenar as cores:\n");
const coresOrdenadas = [...cores].sort();
coresOrdenadas.forEach((cor) => console.log(cor));
