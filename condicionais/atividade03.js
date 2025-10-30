const leia = require('readline-sync')

let nome = leia.question('Digite o Nome do doador: ')
let idade = leia.questionInt('Digite a Idade do doador: ')
let doacao = leia.question('Primeira doação de sangue? (S/N): ').toUpperCase()

let apto = false

if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && doacao === 'S') {
        apto = false  
    } else {
        apto = true   
    }
}

if (apto) {
    console.log("\n" + nome + " está apto para doar sangue!")
} else {
    console.log("\n" + nome + " não está apto para doar sangue!")
}
