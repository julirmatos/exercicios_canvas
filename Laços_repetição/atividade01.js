const leia = require('readline-sync');

let num1 = leia.questionInt("Digite o primeiro número (menor): ");
let num2 = leia.questionInt("Digite o segundo número (maior): ");

if (num1 < num2) {
  console.log("\nNo intervalo entre " + num1 + " e " + num2 + ":\n");

  for (let i = num1; i <= num2; i++) {
    
    (i % 15 === 0) && console.log(i + " é múltiplo de 3 e 5");
  }

} else {
  console.log("\nIntervalo inválido! n");
}
