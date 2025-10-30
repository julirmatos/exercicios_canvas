const leia = require('readline-sync')

let nome = leia.question('Digite o nome do colaborador: ')
let codigo = leia.questionInt('Digite o código do cargo (1 a 6): ')
let salario = leia.questionFloat('Digite o salário: ')

let cargo = ""
let reajuste = 0

switch (codigo) {
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        break
    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        break
    case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        break
    case 4:
        cargo = "Motorista"
        reajuste = 0.06
        break
    case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        break
    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.08
        break
    default:
        console.log("Código inválido! Digite um número entre 1 e 6.")
        process.exit()
}

let novoSalario = salario + (reajuste * salario)

console.log("\nNome do colaborador: " + nome)
console.log("Cargo: " + cargo)
console.log("Salário: R$ " + novoSalario.toFixed(2))
