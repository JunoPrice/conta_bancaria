import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    //contas que o professor mandou no chat
    /** //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15)); */

    // Criando um Objeto da Classe ContaController
    const contas: new ContaController();

    //Cria novas instancias (objetos) da classe CONTA AQUI SAO AS CONTAS CADASTRADAS PREVIAMENTE
    const c1 = new Conta(1, 123, 1, "Jonas", 100000)
    c1.visualizar();

    //AQUI SÃO OS SAQUES DA CONTA DE JONAS - se ele retornar TRUE, quer dizer que conseguiu fazer o saque
    console.log(c1.sacar(200000.00));
    c1.visualizar();


    //CONTA DA ALINE
    const c2 = new Conta(2, 123, 2, "Aline", 200000)
    c2.visualizar();

    //deposito AQUI E O DINHEIRO DEPOSITADO NA CONTA ALINE
    c2.depositar(100.00);
    c2.visualizar();
    
    
    //Contas Correntes AQUI VAI AS CONTAS CORRENTES 

    const cc1 = new ContaCorrente(3, 789, 1, "Andressa", 100000, 1000);
    cc1.visualizar();

    //saque na conta corrente
    cc1.sacar(100500);
    cc1.visualizar();
    
    //deposito na conta corrente
    cc1.depositar(2000)
    cc1.visualizar();

    console.log('');

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
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
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
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
                    agencia = readlinesync.question(''); //Esse macete é pq o readline tem problema com acento

                    console.log("Digite o Número da Agência: ");//A mensagem vem com o console e readline vem vazio
                    agencia = readlinesync.keyInSelect(''); //Esse macete é pq o readline tem problema com acento

                    console.log("escolha o Tipo da Conta: ");//A mensagem vem com o console e readline vem vazio
                    tipo = readlinesync.keyInSelect(tipoContas); //Esse macete é pq o readline tem problema com acento

                    console.log("Digite o Saudo da Conta: ");//A mensagem vem com o console e readline vem vazio
                    saldo = readlinesync.questionFloat(''); //Esse macete é pq o readline tem problema com acento

                    limite = readlinesync.questionFloat('');

                    switch(tipo){
                        case 1:
                            console.log("Digite o Limite da Conta: ");
                            limite = readlinesync.questionFloat('');
                            contas.cadastrar(new ContaCorrente(0, agencia, tipo, titular, saldo, limite))

                        break;
                        case 2:
                            console.log("Digite o Dia do Aniversário da Poupanca: ");
                            aniversario = readlinesync.questionInt('');
                            contas.cadastrar(new ContaPoupanca(0, agencia, tipo, titular, saldo)
                      
                        break;

                    }


                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                    console.log("Digite o número da conta:")
                    numero = readlinesync.questionInt('');

                    contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
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
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();