export abstract class Conta{

    // Modelo de dados
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //gerar o constructor com CTRL + SHIFT + P - ABRE O TOLL BOX
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}
    // Gerar os Métodos Getter's e Setter's


    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get titular(): string {
		return this._titular;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter titular
     * @param {string} value
     */
	public set titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set saldo(value: number) {
		this._saldo = value;
	}
    //observe que vou usar o polimorfismo no metodo sacar pois eu só consigo sacar o valor mediante limite da conta
    public sacar(valor: number): boolean{ //aqui o metodo sacar que o professor fez
        if(valor > this._saldo){ 
            console.log("Saldo Insuficiente!");
            return false;
        }

        this._saldo -= valor
        return true;
    }

    public depositar (valor: number){
        this._saldo += valor;

    }
    //Daqui para baixo são os métodos que serão criados

    public visualizar(){

        let tipo: string; // variavel tipo foi criada dentro do metodo, só funciona neste escopo

        switch(this.tipo){
            case 1:
                tipo = "Conta Corrente" //cliente digitou 1, vai para conta corrente

            break;
            case 2:
                tipo = "Coonta Poupança" //cliente digitou 2, vai para opção poupança
            break;
            default:
                tipo = "Tipo Inválido" //Se nenhuma das opção for selecionada, nem 1 nem 2 vai aparecer isso

        }






        console.log("**************************************");
        console.log("Dados da Conta");
        console.log("**************************************");
        console.log(`Numero da Conta: ${this._numero}`)
        console.log(`Numero da Agencia: ${this._agencia}`)
        console.log(`Tipo da Conta: ${tipo}`)
        console.log(`Nome do Titular da Conta: ${this._titular}`)
        console.log(`Saldo da conta: ${this._saldo}`)
    }


}