const leia = require('readline-sync')

let vetorJu = []
let somaElementos = 0

// Leitura dos 10 números
for (let i = 0; i < 10; i++)  {
  let numero = leia.questionInt(`Digite o ${i + 1}º número: `)
  vetorJu.push(numero)
}

// Elementos nos índices ímpares
let indiceImpar = []
for (let i = 0; i < vetorJu.length; i++) {
  if (i % 2 !== 0) {
    indiceImpar.push(vetorJu[i])
  }
}

// Elementos pares (valores pares)
let indicePar = []
for (let i = 0; i < vetorJu.length; i++) {  
  if (vetorJu[i] % 2 === 0) {
    indicePar.push(vetorJu[i])
  }
}

// Soma e média
for (let i = 0; i < vetorJu.length; i++) {
  somaElementos += vetorJu[i]
}

let mediaElementos = somaElementos / vetorJu.length

// Saída formatada igual ao exemplo
console.log(`Os Números  Ímpares São:\n${indiceImpar.join(" ")}`)
console.log(`\nOsNúmeros Pares São:\n${indicePar.join(" ")}`)
console.log(`\nA Soma dos números é = ${somaElementos}`)
console.log(`\nA Média dos números é = ${mediaElementos.toFixed(2)}`)
