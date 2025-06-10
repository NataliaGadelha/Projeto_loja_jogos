import { Jogo } from './Jogo';

export class JogoDigital extends Jogo {
    private _chaveAtivacao: string;

    constructor(codigo: number, nome: string, genero: string, plataforma: string, preco: number, disponivel: boolean, chaveAtivacao: string) {
        super(codigo, nome, genero, plataforma, preco, disponivel);
        this._chaveAtivacao = chaveAtivacao;
    }

    public get chaveAtivacao() {
        return this._chaveAtivacao;
    }

    public set chaveAtivacao(chave: string) {
        this._chaveAtivacao = chave;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`🔑 Chave de Ativação: ${this._chaveAtivacao}`);
    }
}
