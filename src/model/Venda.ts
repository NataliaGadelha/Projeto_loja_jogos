import { Jogo } from "./Jogo";

export class Venda {
    codigoVenda: number;
    jogo: Jogo;
    quantidade: number;
    valorTotal: number;
    dataVenda: Date;

    constructor(codigoVenda: number, jogo: Jogo, quantidade: number) {
        this.codigoVenda = codigoVenda;
        this.jogo = jogo;
        this.quantidade = quantidade;
        this.valorTotal = jogo.preco * quantidade;
        this.dataVenda = new Date();
    }

mostrarResumo(): void {
    console.log(`\n🧾 Venda #${this.codigoVenda}`);
    console.log(`🆔 Código do jogo       : ${this.jogo.codigo}`);
    console.log(`🎮 Nome do Jogo         : ${this.jogo.nome}`);
    console.log(`📦 Quantidade vendida   : ${this.quantidade}`);
    console.log(`💰 Valor Total          : R$ ${this.valorTotal.toFixed(2)}`);
    console.log(`📅 Data da venda        : ${this.dataVenda.toLocaleString()}`);
    console.log("\n🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟\n");
}

}
