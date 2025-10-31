const leia = require('readline-sync')

let idade
let genero
let desenvolvedora
let continuar = 'S'

let totalBackend = 0
let mulheresFrontend = 0
let homensMobile40 = 0
let nbFullstack30 = 0
let totalPessoas = 0
let somaIdades = 0

while (continuar === 'S' || continuar === 's') {
    idade = leia.questionInt("Digite a idade: ")

    console.log("\nIdentidade de Gênero:")
    console.log("1 - Mulher Cis")
    console.log("2 - Homem Cis")
    console.log("3 - Não Binário")
    console.log("4 - Mulher Trans")
    console.log("5 - Homem Trans")
    console.log("6 - Outros")
    genero = leia.questionInt("Informe o número correspondente: ")

    console.log("\nPessoa Desenvolvedora:")
    console.log("1 - Backend")
    console.log("2 - Frontend")
    console.log("3 - Mobile")
    console.log("4 - FullStack")
    desenvolvedora = leia.questionInt("Informe o número correspondente: ")

    
    totalPessoas = totalPessoas + 1
    somaIdades = somaIdades + idade

    
    switch (desenvolvedora) {
        case 1:
            totalBackend = totalBackend + 1
            break

        case 2:
            
            if (genero === 1 || genero === 4) {
                mulheresFrontend = mulheresFrontend + 1
            }
            break

        case 3:
            
            if ((genero === 2 || genero === 5) && idade > 40) {
                homensMobile40 = homensMobile40 + 1
            }
            break

        case 4:
            
            if (genero === 3 && idade < 30) {
                nbFullstack30 = nbFullstack30 + 1
            }
            break

        default:
            console.log("Opção inválida de desenvolvedor!")
            break
    }

    console.log("")
    continuar = leia.question("Deseja cadastrar outro colaborador? (S/N): ")
    console.log("")
}


let mediaIdades = 0
if (totalPessoas > 0) {
    mediaIdades = somaIdades / totalPessoas
}


console.log("===== RESULTADOS DA PESQUISA =====")
console.log("Total de pessoas desenvolvedoras Backend: " + totalBackend)
console.log("Total de Mulheres Cis e Trans desenvolvedoras Frontend: " + mulheresFrontend)
console.log("Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: " + homensMobile40)
console.log("Total de Não Binários desenvolvedores FullStack menores de 30 anos: " + nbFullstack30)
console.log("Total de pessoas que responderam à pesquisa: " + totalPessoas)
console.log("Média de idade das pessoas que responderam à pesquisa: " + mediaIdades.toFixed(1))
