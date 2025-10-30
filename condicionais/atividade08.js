const leia = require('readline-sync')

let saldo = 1000.00
console.log("Operações disponíveis:")
console.log("1 - Saldo")
console.log("2 - Saque")
console.log("3 - Depósito")

let operacao = leia.questionInt("Digite o código da operação: ")

switch (operacao) {
    case 1:
        console.log("Operação: Saldo")
        console.log("Saldo: R$ " + saldo.toFixed(2))
        break

    case 2:
        let saque = leia.questionFloat("Digite o valor do saque: ")
        if (saque > saldo) {
            console.log("Operação: Saque")
            console.log("Saldo insuficiente!")
        } else {
            saldo = saldo - saque
            console.log("Operação: Saque")
            console.log("Novo saldo: R$ " + saldo.toFixed(2))
        }
        break

    case 3:
        let deposito = leia.questionFloat("Digite o valor do depósito: ")
        saldo = saldo + deposito
        console.log("Operação: Depósito")
        console.log("Novo saldo: R$ " + saldo.toFixed(2))
        break

    default:
        console.log("Operação Inválida!")
}
