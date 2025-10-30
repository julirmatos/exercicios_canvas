const leia = require('readline-sync')

let nome = leia.question('Digite o Nome do doador: ')
let idade = leia.questionInt('Digite a Idade do doador: ')
let primeira = leia.question('Primeira doação de sangue? (true/false): ')

let primeiraDoacao = (primeira.toLowerCase() === 'true')

let apto = false

if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && primeiraDoacao) {
        apto = false 
    } else {
        apto = true 
    }
}

// Saída
if (apto) {
    console.log("\n" + nome + " está apto para doar sangue!")
} else {
    console.log("\n" + nome + " não está apto para doar sangue!")
}
