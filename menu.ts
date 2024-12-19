import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {




    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino, valor: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    // Criando um Objeto da Classe ContaController
    const contas = new ContaController();

    //Cria novas instancias (objetos) da classe CONTA AQUI SAO AS CONTAS CADASTRADAS PREVIAMENTE
    //const c1 = new Conta(1, 123, 1, "Jonas", 100000)
    //c1.visualizar();

    //AQUI SÃO OS SAQUES DA CONTA DE JONAS - se ele retornar TRUE, quer dizer que conseguiu fazer o saque
    //console.log(c1.sacar(200000.00));
    //c1.visualizar();

       //Novas Instâncias da Classe ContaCorrente (Objetos)
         contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
         contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

      // Novas Instâncias da Classe ContaPoupança (Objetos)
         contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
         contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                AUVP - INVESTIMENTOS                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nAUVP - A ÚNICA VERDADE POSSÍVEL - OBRIGADO PELA CONFIANÇA!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                
                    console.log("Digite o Número da Agência: ");//A mensagem vem com o console e readline vem vazio
                    agencia = readlinesync.questionInt(''); //Esse macete é pq o readline tem problema com acento

                    console.log("Digite o Nome do Titular: ");//A mensagem vem com o console e readline vem vazio
                    titular = readlinesync.question(''); //Esse macete é pq o readline tem problema com acento

                    console.log("Escolha o tipo da Conta: ");//A mensagem vem com o console e readline vem vazio
                    tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false}) + 1; //Esse macete é pq o readline tem problema com acento
                    //observe que estou usando a propriedade CANCEL: FALSE - isso quer dizer que não posso cancelar
                    //Eu devo obrigatoriamente digitar um valor.
                    //Ao final somamos +1 (o vetor começa do zero, mas o menu começa a partir do 1)
                                    

                    console.log("Digite o Saudo da Conta: ");
                    saldo = readlinesync.questionFloat(''); 

                    //limite = readlinesync.questionFloat('');

                    switch(tipo){ //tem poupança e corrente, por isso usamos esse switch case pra saber qual conta é
                        case 1:
                            console.log("Digite o Limite da Conta: ");
                            limite = readlinesync.questionFloat('');
                            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))

                        break;
                        case 2:
                            console.log("Digite o Dia do Aniversário da Poupança: ");
                            aniversario = readlinesync.questionInt('');
                            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                      
                        break;

                    }
                keyPress()
                break;

            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                    contas.listarTodas();
                

                keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                    console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    contas.procurarPorNumero(numero);

                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                    console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    let conta = contas.buscarNoArray(numero);

                    if (conta !== null){

                        console.log("Digite o novo Número da Agência: ");
                        agencia = readlinesync.questionInt('');

                        console.log("Digite o novo Nome do Titular: ");
                        titular = readlinesync.question('');

                        console.log("Digite o novo Saldo da Conta: ");
                        saldo = readlinesync.questionFloat('');

                        tipo = conta.tipo;

                        switch(tipo){
                            case 1:
                                console.log("Digite o novo Limite da Conta: ");
                                limite = readlinesync.questionFloat('');
                                contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                            break;
                            case 2:
                                console.log("Digite o novo Dia do Aniversário da Poupança: ");
                                aniversario = readlinesync.questionInt('');
                                contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                            break;
                        }

                    }else{
                        console.log("Conta não encontrada!");
                    }
                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                    console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    contas.deletar(numero);

                keyPress()
                break;

            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                    console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o valor do Saque:");
                    valor = readlinesync.questionFloat('');

                    contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                    console.log("Digite o número da conta:");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o valor do Depósito:");
                    valor = readlinesync.questionFloat('');

                    contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                    console.log("Digite o número da conta de origem:");
                    numero = readlinesync.questionInt('');

                    console.log("Digite o número da conta de destino:");
                    numeroDestino = readlinesync.questionInt('');

                    console.log("Digite o valor da Transferência:");
                    valor = readlinesync.questionFloat('');

                    contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;

                case 9:
                    console.log(colors.fg.whitestrong, 
                        "\n\nConsulta pelo Titular\n\n", colors.reset);
    
                        console.log("\nDigite o nom,e do Titular: ")
                        titular = readlinesync.question("")
    
                        contas.procurarPorTitular(titular);
    
                    keyPress();
                break;
                default:
                    console.log(colors.fg.whitestrong, 
                        "\nOpção Inválida!\n", colors.reset);
                    keyPress()
                    break;
            }
        }
    }

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jonas Gomes");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/JunoPrice");
    console.log("*****************************************************");
}

function keyPress(): void { //keypress faz uma pausa sempre que você escolher uma opção do Menu
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();