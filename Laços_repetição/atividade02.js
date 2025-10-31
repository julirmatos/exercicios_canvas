const leia = require('readline-sync')

let numero 
let contador 
let pares = 0
let impares = 0


for (contador = 1; contador <= 10; contador++) {
    numero = leia.questionInt("Digite o " + contador + "º número: ")
    console.log("Número digitado: " + numero)
   
    if (numero % 2 === 0) {
    pares++
    } else {
    impares++
    }       

}  
console.log("")
console.log("\nTotal de números pares: " + pares)
console.log("Total de números impares: " + impares)
