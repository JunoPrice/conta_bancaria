import { Conta } from "./Conta"; //importanto dados da herança de conta

export class ContaPoupanca extends Conta { //Criando a classe da poupança
    private _aniversario: number; //a conta poupança tem o atributo aniversário mensal, estou criando
    constructor(numero: number, agencia: number, tipo: number, titular: string, //importanto tudo da herança
        saldo: number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo); //indicando o que foi herdado da super classe
        this._aniversario = aniversario;
    }
    
    public get aniversario() {
        return this._aniversario;
    }
    public set aniversario(aniversario: number) {
        this._aniversario = aniversario;
    }
    public visualizar(): void { 
        super.visualizar();
        console.log("Dia do aniversário da conta poupança: " + this._aniversario);
    }
}