const leia = require('readline-sync')

let vetorJu = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let indices = []

for (let i = 0; i < vetorJu.length; i++) {
  indices.push(i)
}

console.log("Vetor:  ", vetorJu.join(", "))

let numero = leia.questionInt("Digite o número que deseja encontrar: ")

let posicao = vetorJu.indexOf(numero)

if (posicao !== -1) {
  console.log(`O número ${numero} está localizado na posição ${posicao}.`)
} else {
  console.log(`O número ${numero} não foi encontrado !.`)
}
