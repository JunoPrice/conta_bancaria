import readlinesync = require("readline-sync");
import { colors } from './util/Colors';

export class Menu {
  static exibirMenu(): void {
    while (true) {
      console.log(colors.bg.black, colors.fg.green, "********************************************");
      console.log("                                            ");
      console.log("             BANCO DO ANDRADE               ");
      console.log("                                            ");
      console.log("********************************************");
      console.log("     1 - Criar Conta                        ");
      console.log("     2 - Listar todas as Contas             ");
      console.log("     3 - Buscar Conta por Numero            ");
      console.log("     4 - Atualizar Dados da Conta           ");
      console.log("     5 - Apagar Conta                       ");
      console.log("     6 - Sacar                              ");
      console.log("     7 - Depositar                          ");
      console.log("     8 - Transferir valores entre Contas    ");
      console.log("     9 - Sair                               ");
      console.log("********************************************", colors.reset);
      console.log("Entre com a opção desejada: ");
      
      let opcao = readlinesync.questionInt("");

      switch (opcao) {
        case 1:
          console.log("Opção 1: Criar Conta");
          break;
        case 2:
          console.log("Opção 2: Listar todas as Contas");
          break;
        case 3:
          console.log("Opção 3: Buscar Conta por Numero");
          break;
        case 4:
          console.log("Opção 4: Atualizar Dados da Conta");
          break;
        case 5:
          console.log("Opção 5: Apagar Conta");
          break;
        case 6:
          console.log("Opção 6: Sacar");
          break;
        case 7:
          console.log("Opção 7: Depositar");
          break;
        case 8:
          console.log("Opção 8: Transferir valores entre Contas");
          break;
        case 9:
          console.log("Saindo...");
          return;
        default:
          console.log("Opção inválida! Tente novamente.");
      }
    }
  }
}
