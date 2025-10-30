const leia = require('readline-sync')

let numero1 = leia.questionFloat('Digite o 1º número: ')
let numero2 = leia.questionFloat('Digite o 2º número: ')
let operacao = leia.questionInt('Digite a operação (1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão): ')

let resultado = 0
let simbolo = ""

switch (operacao) {
    case 1:
        resultado = numero1 + numero2
        simbolo = "+"
        break
    case 2:
        resultado = numero1 - numero2
        simbolo = "-"
        break
    case 3:
        resultado = numero1 * numero2
        simbolo = "*"
        break
    case 4:
        if (numero2 === 0) {
            console.log("Erro: divisão por zero não é permitida!")
            process.exit()
        }
        resultado = num1 / num2
        simbolo = "/"
        break
    default:
        console.log("Operação inválida!")
        process.exit()
}

console.log("\n" + numero1 + " " + simbolo + " " + numero2 + " = " + resultado)
