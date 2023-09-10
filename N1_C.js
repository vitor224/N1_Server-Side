// Função para verificar se um ano é bissexto
function isBissexto(ano) {
    // Verifica se o ano é divisível por 4
    if (ano % 4 === 0) {
      // Verifica se o ano é divisível por 100 e não divisível por 400
      if (ano % 100 === 0 && ano % 400 !== 0) {
        return false; // Não é bissexto
      } else {
        return true; // É bissexto
      }
    } else {
      return false; // Não é bissexto
    }
  }
  
  // Função para ler uma linha de texto do console
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Solicita ao usuário que insira um ano
  rl.question("Digite um ano: ", function(ano) {
    // Converte a entrada do usuário para um número inteiro
    ano = parseInt(ano);
  
    // Verifica se o ano é bissexto e exibe o resultado
    if (isBissexto(ano)) {
      console.log(ano + " é um ano bissexto.");
    } else {
      console.log(ano + " não é um ano bissexto.");
    }
  
    // Fecha a interface readline
    rl.close();
  });
  