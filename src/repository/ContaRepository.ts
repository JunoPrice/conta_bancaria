import { Conta } from "../model/Conta";

export interface ContaRepository{ //observe que essa interface vai guardar tudo, vai ser o repositório
    //observe também que ela não cria métodos, ela só assina de outras classes

    //criando os métodos do CRUD (Create, Read, Update e Delete)
    procurarPorNumero(numero: number): void; //responsavel por achar uma conta pelo numero dela
    listarTodas(): void;//esse metodo eu vou visualizar todas as contas cadastradas
    cadastrar(conta: Conta): void;//cadastro da conta, importando a Classe CONTA
    atualizar(conta: Conta): void;
    deletar(numero: number): void;//passar o numero da conta e a partir disso ele apagar a conta na coleção

    //Métodos Bancários, vindo de Conta.ts
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;

}