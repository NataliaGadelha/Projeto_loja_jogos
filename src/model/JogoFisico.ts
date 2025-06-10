import { Jogo } from "./Jogo";

export class JogoFisico extends Jogo {
    private _midia: string;
    private _estoque: number;

    constructor(codigo: number, nome: string, genero: string, plataforma: string, preco: number, disponivel: boolean, midia: string, estoque: number) {
        super(codigo, nome, genero, plataforma, preco, disponivel);
        this._midia = midia;
        this._estoque = estoque;
    }

    public get midia() {
        return this._midia;
    }

    public set midia(midia: string) {
        this._midia = midia;
    }

    public get estoque() {
        return this._estoque;
    }

    public set estoque(estoque: number) {
        this._estoque = estoque;
    }

    public venderJogo(quantidade: number): void {
        if (quantidade > this._estoque) {
            console.log("❌ Estoque insuficiente para a quantidade desejada!");
        } else {
            this._estoque -= quantidade;
            console.log(`✅ Venda realizada! ${quantidade} unidades vendidas.`);
        }
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`💿 Tipo de mídia: ${this._midia}`);
        console.log(`📦 Estoque disponível: ${this._estoque}`);
    }
}
