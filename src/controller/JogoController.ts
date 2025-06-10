import { Jogo } from "../model/Jogo";
import { JogoRepository } from "../repository/JogoRepository";
import { colors } from "../util/Colors";
import { JogoFisico } from "../model/JogoFisico";
import { JogoDigital } from "../model/JogoDigital";
import { Venda } from "../model/Venda";

export class JogoController implements JogoRepository {

    private listaJogos: Array<Jogo> = new Array<Jogo>();
    // private listaVendas: Array<Venda> = new Array<Venda>();
    private listaVendas: Venda[] = [];
    private codigoVenda: number = 0;
    codigo: number = 0;

    buscarPorCodigo(codigo: number): void {
        let buscaJogo = this.buscarNoArray(codigo);

        if (buscaJogo != null) {
            buscaJogo.visualizar();
        } else {
            throw new Error(`❌ O Jogo com código ${codigo} não foi encontrado!`);
        }
    }

    listarTodos(): void {
        for (let jogo of this.listaJogos) {
            jogo.visualizar();
        }
    }

    cadastrar(jogo: Jogo): void {
        this.listaJogos.push(jogo);
        console.log(colors.fg.greenstrong, "\n✅ O Jogo código: " + jogo.codigo +
            " foi cadastrado com sucesso!", colors.reset);
    }

    atualizar(codigo: number, novoJogo: Jogo): boolean {
        let buscaJogo = this.buscarNoArray(codigo);

        if (buscaJogo != null) {
            this.listaJogos[this.listaJogos.indexOf(buscaJogo)] = novoJogo;
            console.log(colors.fg.greenstrong, `\n✅ O Jogo código: ${codigo} foi atualizado com sucesso!`, colors.reset);
            return true;
        } else {
            throw new Error(`❌ O Jogo com código ${codigo} não foi encontrado!`);
        }
    }

    deletar(codigo: number): void {
        let buscaJogo = this.buscarNoArray(codigo);

        if (buscaJogo != null) {
            this.listaJogos.splice(this.listaJogos.indexOf(buscaJogo), 1);
            console.log(colors.fg.greenstrong, `\n✅ O Jogo código: ${codigo} foi apagado com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.redstrong, `\n❌ O Jogo código: ${codigo} não foi encontrado!`, colors.reset);
        }
    }

    atualizarPreco(codigo: number, novoPreco: number): void {
        let buscaJogo = this.buscarNoArray(codigo);

        if (buscaJogo != null) {
            buscaJogo.preco = novoPreco;
            console.log(colors.fg.green, `\n✅ O preço do jogo "${buscaJogo.nome}" foi atualizado para R$${novoPreco.toFixed(2)}!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\n❌ O Jogo código: ${codigo} não foi encontrado!`, colors.reset);
        }
    }

    alterarDisponibilidade(codigo: number): void {
        let buscaJogo = this.buscarNoArray(codigo);

        if (buscaJogo != null) {
            buscaJogo.disponivel = !buscaJogo.disponivel;
            console.log(colors.fg.green, `\n🔄 O jogo "${buscaJogo.nome}" agora está ${buscaJogo.disponivel ? "Disponível" : "Indisponível"}!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\n❌ O Jogo código: ${codigo} não foi encontrado!`, colors.reset);
        }
    }

    public gerarCodigo(): number {
        return ++this.codigo;
    }

    public buscarNoArray(codigo: number): Jogo | null {

        for (let jogo of this.listaJogos) {
            if (jogo.codigo === codigo)
                return jogo;
        }

        return null;
    }

    registrarVenda(codigo: number, quantidade: number): boolean {
        let jogo = this.buscarNoArray(codigo);

        if (jogo == null) {
            console.log(colors.fg.redstrong, `\n❌ Jogo código ${codigo} não encontrado!`, colors.reset);
            return false;
        }

        if (jogo instanceof JogoFisico) {
            if (jogo.estoque >= quantidade) {
                jogo.estoque -= quantidade;
                this.codigoVenda++;
                const venda = new Venda(this.codigoVenda, jogo, quantidade);
                this.listaVendas.push(venda);
                console.log(colors.fg.greenstrong, `\n✅ Vendidos ${quantidade} unidade(s) do jogo "${jogo.nome}". Estoque atual: ${jogo.estoque}`, colors.reset);

                // Se acabar o estoque, marcar indisponível
                if (jogo.estoque === 0) {
                    jogo.disponivel = false;
                    console.log(colors.fg.yellowstrong, `\n⚠️ Estoque do jogo "${jogo.nome}" esgotado. Jogo marcado como indisponível.`, colors.reset);
                }
                return true;
            } else {
                console.log(colors.fg.redstrong, `\n❌ Estoque insuficiente. Estoque atual: ${jogo.estoque}`, colors.reset);
                return false;
            }
        } else if (jogo instanceof JogoDigital) {
            // Jogos digitais não têm estoque físico, só confirmamos a venda
            this.codigoVenda++;
            const venda = new Venda(this.codigoVenda, jogo, quantidade);
            this.listaVendas.push(venda);
            console.log(colors.fg.greenstrong, `\n✅ Venda confirmada do jogo digital "${jogo.nome}".`, colors.reset);
            return true;
        } else {
            console.log(colors.fg.redstrong, `\n❌ Tipo de jogo desconhecido.`, colors.reset);
            return false;
        }

    }

    public listarVendas(): void {
        if (this.listaVendas.length === 0) {
            console.log(colors.fg.yellowstrong, "\nNenhuma venda registrada ainda.", colors.reset);
            return;
        }

        console.log("\n🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟");
        console.log(colors.fg.magentastrong, "\n                         LISTA DE VENDAS  ", colors.reset);
        console.log("\n🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟\n");
        this.listaVendas.forEach((venda, index) => {
            // console.log(`\nVenda #${index + 1}`);
            venda.mostrarResumo(); // ou imprimir as infos da venda aqui direto
        });
    }

}