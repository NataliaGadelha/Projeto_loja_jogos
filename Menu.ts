import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { JogoFisico } from "./src/model/JogoFisico";
import { JogoDigital } from "./src/model/JogoDigital";
import { JogoController } from "./src/controller/JogoController";

export function main() {

    //Instância da Classe Controller
    let jogos: JogoController = new JogoController();

    // Variáveis auxiliares
    let opcao, codigo, tipo, preco, estoque: number;
    let nome, genero, plataforma, chaveAtivacao, midia: string;
    let disponivel: boolean;
    const tiposJogos = ["Jogo Físico", "Jogo Digital"];

    // Testando os métodos do jogo

    console.log("\nCadastrar Jogos\n");

    let jogo1: JogoDigital = new JogoDigital(jogos.gerarCodigo(), "God of War", "Ação/Aventura", "PlayStation 5",
        199.99, true, "GOW-PS5-1234");
    jogos.cadastrar(jogo1);

    let jogo2: JogoDigital = new JogoDigital(jogos.gerarCodigo(), "Counter-Strike: GO", "FPS", "PC",
        49.99, true, "CSGO-PC-5678");
    jogos.cadastrar(jogo2);

    let jogo3: JogoFisico = new JogoFisico(jogos.gerarCodigo(), "Red Dead Redemption", "Ação/Aventura", "Xbox Series X",
        249.99, true, "Blu-ray", 15);
    jogos.cadastrar(jogo3);

    let jogo4: JogoFisico = new JogoFisico(jogos.gerarCodigo(), "Super Mario Bros", "Plataforma", "Nintendo Switch",
        299.99, true, "Cartucho", 10);
    jogos.cadastrar(jogo4);

    jogos.listarTodos();

    while (true) {

        console.log(colors.bg.black + colors.fg.magentastrong +
            "\n🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟");
        console.log("                                                       ");
        console.log("             🎮 GameVerse - Menu de Jogos              ");
        console.log("                                                       ");
        console.log("🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟");
        console.log("                                                       ");
        console.log("             1 - 📥 Cadastrar Jogo                     ");
        console.log("             2 - 📜 Listar todos os Jogos              ");
        console.log("             3 - 🔎 Buscar Jogo por Número             ");
        console.log("             4 - ✏️  Atualizar informações do Jogo     ");
        console.log("             5 - 🗑️  Apagar Jogo                       ");
        console.log("             6 - ❌ Sair                               ");
        console.log("                                                       ");
        console.log("🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟");
        console.log("                                                       ",
            colors.reset);


        console.log("\n📲 Escolha uma opção digitando o número correspondente:\n");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.greenstrong, "\n🚪 Saindo do sistema...");
            console.log(colors.fg.greenstrong,
                "\n🎮 GameVerse – Um universo inteiro de jogos ao seu alcance!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\n📝 Cadastrando um novo jogo...\n\n", colors.reset);

                console.log("🎮 Digite o nome do jogo: ");
                nome = readlinesync.question("");

                console.log("🗂️ Digite o gênero do jogo: ");
                genero = readlinesync.question("");

                console.log("🖥️ Digite a plataforma do jogo: ");
                plataforma = readlinesync.question("");

                console.log("💰 Digite o preço do jogo (R$): ");
                preco = readlinesync.questionFloat("");

                console.log("\n🎯 Escolha o tipo de jogo:");
                tipo = readlinesync.keyInSelect(["🌐 Digital", "💿 Físico"], "", { cancel: false }) + 1;

                switch (tipo) {
                    case 1:
                        console.log("🔑 Digite a chave de ativação do jogo digital: ");
                        chaveAtivacao = readlinesync.question("");
                        jogos.cadastrar(
                            new JogoDigital(jogos.gerarCodigo(), nome, genero, plataforma, preco, true, chaveAtivacao)
                        );
                        break;
                    case 2:
                        console.log("📀 Digite o tipo de mídia (CD, Cartucho, etc.): ");
                        midia = readlinesync.question("");

                        console.log("📦 Digite a quantidade em estoque: ");
                        estoque = readlinesync.questionInt("");

                        jogos.cadastrar(
                            new JogoFisico(jogos.gerarCodigo(), nome, genero, plataforma, preco, true, midia, estoque)
                        );
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\n📜 Listando todos os jogos...\n\n", colors.reset);

                jogos.listarTodos();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\n🔎 Buscando jogo por código...\n\n", colors.reset);

                console.log("🆔 Digite o código do jogo: ");
                codigo = readlinesync.questionInt("");

                // Tratamento exception
                try {
                    jogos.buscarPorCodigo(codigo);
                } catch (error: any) {
                    console.log(colors.fg.redstrong, `\n${error.message}`, colors.reset);
                }

                keyPress()
                break;
            case 4:

                console.log(colors.fg.whitestrong, "\n\n🔄 Atualizar dados do Jogo\n\n", colors.reset);

                console.log("🆔 Digite o código do jogo: "); codigo = readlinesync.questionInt("");

                // Tratamento exception
                try {
                    let jogo = jogos.buscarNoArray(codigo);
                    if (!jogo) throw new Error(`❌ O Jogo código: ${codigo} não foi encontrado!`);

                    console.log("🎮 Digite o nome do jogo: ");
                    nome = readlinesync.question("");

                    console.log("🗂️ Digite o gênero do jogo: ");
                    genero = readlinesync.question("");

                    console.log("🖥️ Digite a plataforma do jogo: ");
                    plataforma = readlinesync.question("");

                    console.log("💰 Digite o novo preço do jogo (R$): ");
                    preco = readlinesync.questionFloat("");

                    console.log("\n🎯 Escolha o tipo de jogo:");
                    tipo = readlinesync.keyInSelect(["🌐 Digital", "💿 Físico"], "", { cancel: false }) + 1;

                    switch (tipo) {
                        case 1: // Jogo Digital 

                            console.log("🔑 Digite a chave de ativação do jogo digital: ");
                            chaveAtivacao = readlinesync.question("");
                            jogos.atualizar(codigo, new JogoDigital(codigo, nome, genero, plataforma, preco, true, chaveAtivacao));

                            break;
                        case 2: // Jogo Físico 

                            console.log("📀 Digite o tipo de mídia (CD, Cartucho, etc.): ");
                            midia = readlinesync.question("");
                            console.log("📦 Digite a quantidade em estoque: ");
                            estoque = readlinesync.questionInt("");
                            jogos.atualizar(codigo, new JogoFisico(codigo, nome, genero, plataforma, preco, true, midia, estoque));
                            break;
                    } // Tratamento exception
                } catch (error: any) {
                    console.log(colors.fg.redstrong, `\n${error.message}`, colors.reset);
                    console.log(colors.fg.red, `\n❌ O Jogo código: ${codigo} não foi encontrado!`, colors.reset);
                }
                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\n🗑️ Apagando jogo...\n\n", colors.reset);

                console.log("🆔 Digite o código do jogo: ");
                codigo = readlinesync.questionInt("");

                // Tratamento exception
                try {
                    jogos.deletar(codigo);
                } catch (error: any) {
                    console.log(colors.fg.redstrong, `\n${error.message}`, colors.reset);
                }

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\n❌ Opção inválida! Tente novamente.\n", colors.reset);

                keyPress()
                break;
        }
    }

}

export function sobre(): void {
    console.log("\n🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟\n");
    console.log("📌 Projeto Desenvolvido por: Natália Gadelha");
    console.log("💼 Generation Brasil - 📧 natt_gdl@hotmail.com");
    console.log("🔗 GitHub: github.com/NataliaGadelha/Projeto_loja_jogos\n");
    console.log("🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\n⏎ Pressione enter para continuar...");
    readlinesync.prompt();
}

main();