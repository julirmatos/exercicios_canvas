/*Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante. Veja o exemplo abaixo:
ENTRADA
Nota 1: 10.0
Nota 2: 8.0
Nota 3: 7.0
Nota 4: 7.5
saída
Média final: 8.1
*/

let nota1 = 10.0
let nota2 = 8.0
let nota3 = 7.0
let nota4 = 7.5

let mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4

console.log("A Média Final é: " + mediaNotas.toFixed(1))
