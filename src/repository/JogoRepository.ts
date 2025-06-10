import { Jogo } from "../model/Jogo";

export interface JogoRepository {

    // CRUD do Jogo
    buscarPorCodigo(codigo: number): Jogo | undefined;
    listarTodos(): void;
    cadastrar(jogo: Jogo): void;
    atualizar(codigo: number, novoJogo: Jogo): boolean;
    deletar(codigo: number): boolean;
    
    // Métodos jogos
    atualizarPreco(codigo: number, novoPreco: number): void;
    alterarDisponibilidade(codigo: number): void;
}

