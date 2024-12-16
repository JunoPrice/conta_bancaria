import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    //Coleção Array que vai armazenar os Objetos conta
    private listaContas = new Array<Conta>();

    // Controlar os Números das Contas
    public numero: number = 0;



    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }


    listarTodas(): void {
        throw new Error("Method not implemented.");
    }


    public cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi cadastrada com sucesso!")
    }


    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }


    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }


    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }


    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }


    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //Métodos Auxiliares

    public gerarNumero(): number{
        return ++this.numero;

    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if(conta.numero === numero)
                return conta;
        }

    }

    
}