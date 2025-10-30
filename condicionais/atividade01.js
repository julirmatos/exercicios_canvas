const leia = require('readline-sync')

let numeroA = leia.questionInt('Digite o primeiro numero: ')
let numeroB = leia.questionInt('Digite o segundo numero: ')
let numeroC = leia.questionInt('Digite o terceiro numero: ')

let soma = numeroA + numeroB

if (soma > numeroC) {
    console.log(numeroA + " + " + numeroB + " = " + soma + " > " + numeroC)
    console.log("A soma de A + B é maior que C")
} else if (soma < numeroC) {
    console.log(numeroA + " + " + numeroB + " = " + soma + " < " + numeroC)
    console.log("A soma de A + B é menor que C")
} else {
    console.log(numeroA + " + " + numeroB + " = " + soma + " = " + numeroC)
    console.log("A soma de A + B é igual a C")
}

console.log("Fim do programa")
