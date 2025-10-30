const leia = require('readline-sync')

let palavra1 = leia.question('Digite a primeira palavra: ').toLowerCase()
let palavra2 = leia.question('Digite a segunda palavra: ').toLowerCase()
let palavra3 = leia.question('Digite a terceira palavra: ').toLowerCase()

let animal = ""

if (palavra1 === "vertebrado") {
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            animal = "Águia"
        } else if (palavra3 === "onivoro") {
            animal = "Pomba"
        }
    } else if (palavra2 === "mamifero") {
        if (palavra3 === "onivoro") {
            animal = "Homem"
        } else if (palavra3 === "herbivoro") {
            animal = "Vaca"
        }
    }
} else if (palavra1 === "invertebrado") {
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            animal = "Pulga"
        } else if (palavra3 === "herbivoro") {
            animal = "Lagarta"
        }
    } else if (palavra2 === "anelideo") {
        if (palavra3 === "hematofago") {
            animal = "Sanguessuga"
        } else if (palavra3 === "onivoro") {
            animal = "Minhoca"
        }
    }
}

console.log("\nO animal escolhido foi: " + animal)
