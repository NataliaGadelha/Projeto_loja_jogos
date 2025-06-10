export abstract class Jogo {

    private _codigo: number;
    private _nome: string;
    private _genero: string;
    private _plataforma: string;
    private _preco: number;
    private _disponivel: boolean;

    constructor(codigo: number, nome: string, genero: string, plataforma: string, preco: number, disponivel: boolean) {
        this._codigo = codigo;
        this._nome = nome;
        this._genero = genero;
        this._plataforma = plataforma;
        this._preco = preco;
        this._disponivel = disponivel;
    }

    public get codigo() {
        return this._codigo;
    }

    public set codigo(codigo: number) {
        this._codigo = codigo;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get genero() {
        return this._genero;
    }

    public set genero(genero: string) {
        this._genero = genero;
    }

    public get plataforma() {
        return this._plataforma;
    }

    public set plataforma(plataforma: string) {
        this._plataforma = plataforma;
    }

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public get disponivel() {
        return this._disponivel;
    }

    public set disponivel(disponivel: boolean) {
        this._disponivel = disponivel;
    }

    public atualizarPreco(novoPreco: number): void {
        this._preco = novoPreco;
        console.log(`✅ Preço atualizado para R$${novoPreco.toFixed(2)}`);
    }

    public alterarDisponibilidade(): void {
        this._disponivel = !this._disponivel;
        console.log(`🔄 Disponibilidade alterada para: ${this._disponivel ? "Disponível" : "Indisponível"}`);
    }

    public visualizar(): void {
        console.log("\n\n*****************************************************");
        console.log("🕹️ Informações do Jogo:");
        console.log("*****************************************************");
        console.log(`🆔 Código: ${this._codigo}`);
        console.log(`🎮 Nome: ${this._nome}`);
        console.log(`🗂️  Gênero: ${this._genero}`);
        console.log(`🖥️  Plataforma: ${this._plataforma}`);
        console.log(`💰 Preço: R$${this._preco.toFixed(2)}`);
        console.log(`✅ Disponível: ${this._disponivel ? "Sim" : "Não"} \n`);
    }
}
