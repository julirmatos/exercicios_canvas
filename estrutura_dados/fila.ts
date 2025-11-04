import * as readlineSync from "readline-sync";

class BancoFila {
    private fila: string[];

    constructor() {
        this.fila = [];
    }

    adicionarCliente(): void {
        const nome = readlineSync.question("\nDigite o Nome do Cliente: ");
        this.fila.push(nome);

        console.log("\nFila:");
        this.fila.forEach((cliente) => console.log(cliente));

        console.log("\nCliente Adicionado!");
    }

    listarClientes(): void {
        if (this.fila.length === 0) {
            console.log("\nA Fila está vazia!");
        } else {
            console.log("\nLista de Clientes na Fila:");
            this.fila.forEach((cliente) => console.log(cliente));
        }
    }

    chamarCliente(): void {
        if (this.fila.length === 0) {
            console.log("\nA Fila está vazia!");
        } else {
            this.fila.shift();
            console.log("\nFila:");
            this.fila.forEach((cliente) => console.log(cliente));
            console.log("\nO Cliente foi Chamado!");
        }
    }
}


const banco = new BancoFila();
let opcao: number;

do {
    console.log("\nMenu:");
    console.log("1 - Adicionar Cliente");
    console.log("2 - Listar Clientes");
    console.log("3 - Chamar Cliente");
    console.log("0 - Sair");
    opcao = Number(readlineSync.question("Digite uma opção: "));

    switch (opcao) {
        case 1:
            banco.adicionarCliente();
            break;
        case 2:
            banco.listarClientes();
            break;
        case 3:
            banco.chamarCliente();
            break;
        case 0:
            console.log("\nPrograma Finalizado!");
            break;
        default:
            console.log("\nOpção inválida! Tente novamente.");
    }
} while (opcao !== 0);
