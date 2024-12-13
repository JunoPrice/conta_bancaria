import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    private _aniversario: number;


	constructor(aniversario: number) {
		this._aniversario = aniversario;
	}

}

