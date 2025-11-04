import * as readlineSync from "readline-sync";

class Stack {
    private pilha: string[];

    constructor() {
        this.pilha = [];
    }

    adicionarLivro(): void {
        const nome = readlineSync.question("\nDigite o nome do Livro: ");
        this.pilha.push(nome);

        console.log("\nPilha:");
        this.pilha.forEach((livro) => console.log(livro));

        console.log("\nLivro adicionado!");
    }

    listarLivros(): void {
        if (this.pilha.length === 0) {
            console.log("\nA Pilha está vazia!");
        } else {
            console.log("\nLista de Livros na Pilha:");
            this.pilha.forEach((livro) => console.log(livro));
        }
    }

    retirarLivro(): void {
        if (this.pilha.length === 0) {
            console.log("\nA Pilha está vazia!");
        } else {
            this.pilha.pop();
            console.log("\nPilha:");
            this.pilha.forEach((livro) => console.log(livro));
            console.log("\nUm Livro foi retirado da pilha!");
        }
    }
}

const biblioteca = new Stack();
let opcao: number;

do {
    console.log("\nMenu:");
    console.log("1 - Adicionar Livro");
    console.log("2 - Listar Livros");
    console.log("3 - Retirar Livro");
    console.log("0 - Sair");
    opcao = Number(readlineSync.question("Digite uma opção: "));

    switch (opcao) {
        case 1:
            biblioteca.adicionarLivro();
            break;
        case 2:
            biblioteca.listarLivros();
            break;
        case 3:
            biblioteca.retirarLivro();
            break;
        case 0:
            console.log("\nPrograma Finalizado!");
            break;
        default:
            console.log("\nOpção inválida! Tente novamente.");
    }
} while (opcao !== 0);
