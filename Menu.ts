import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Jogo } from "./src/model/Jogo";

export function main() {

    let opcao: number;

    const jogoTeste = new Jogo(1, "Cyber Quest", "Ação/RPG", "PC", 149.99, true);

    // Testando os métodos do jogo
    console.log("🔎 Visualizando jogo...");
    jogoTeste.visualizar();

    console.log("\n💰 Atualizando preço para R$129,99...");
    jogoTeste.atualizarPreco(129.99);
    jogoTeste.visualizar();

    console.log("\n🔄 Alterando disponibilidade...");
    jogoTeste.alterarDisponibilidade();
    jogoTeste.visualizar();

    while (true) {

        console.log(colors.bg.black + colors.fg.magentastrong +
                    "*******************************************************");
        console.log("                                                       ");
        console.log("             🎮 GameVerse - Menu de Jogos              ");
        console.log("                                                       ");
        console.log("*******************************************************");
        console.log("                                                       ");
        console.log("             1 - 📥 Cadastrar Jogo                     ");
        console.log("             2 - 📜 Listar todos os Jogos              ");
        console.log("             3 - 🔎 Buscar Jogo por Número             ");
        console.log("             4 - ✏️  Atualizar informações do Jogo     ");
        console.log("             5 - 🗑️  Apagar Jogo                       ");
        console.log("             6 - ❌ Sair                               ");
        console.log("                                                       ");
        console.log("*******************************************************");
        console.log("                                                       ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.cyanstrong,"\n🚪 Saindo do sistema...");
            console.log(colors.fg.cyanstrong,
                "\n🎮 GameVerse – Um universo inteiro de jogos ao seu alcance!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\n➡️ Cadastrando um novo jogo...\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\n📜 Listando todos os jogos...\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\n🔎 Buscando jogo por código...\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\n✏️ Atualizando informações do jogo...\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\n🗑️ Apagando jogo...\n\n", colors.reset);

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
    console.log("\n*******************************************************");
    console.log("Projeto Desenvolvido por: Natália Gadelha");
    console.log("Generation Brasil - natt_gdl@hotmail.com");
    console.log("github.com/NataliaGadelha/Projeto_loja_jogos");
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();