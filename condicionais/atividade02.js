const leia = require('readline-sync')

let numero = leia.questionInt('Digite um número: ')

let tipo = ''
if (numero % 2 === 0) {
    tipo = 'par'
} else {
    tipo = 'ímpar'
}

let sinal = ''
if (numero >= 0) {
    sinal = 'positivo'
} else {
    sinal = 'negativo'
}

console.log("\nO Número " + numero + " é " + tipo + " e " + sinal + "!")
