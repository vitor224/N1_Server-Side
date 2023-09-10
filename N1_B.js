const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular a média das notas
function calcularMedia(notas) {
  var soma = 0;
  for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

// Função para verificar a classificação
function verificarClassificacao(notas) {
  var media = calcularMedia(notas);

  if (media >= 70) {
    // Passou em todos os exames
    return "A - Passou em todos os exames";
  } else if (
    notas[0] >= 70 &&
    notas[1] >= 70 &&
    notas[3] >= 70 &&
    (notas[2] < 70 || notas[4] < 70)
  ) {
    // Passou em I, II e IV, mas não em III ou V
    return "B - Passou em I, II e IV, mas não em III ou V";
  } else if (
    (notas[0] >= 70 && notas[1] >= 70) &&
    (notas[2] >= 70 || notas[3] >= 70 || notas[4] >= 70)
  ) {
    // Passou em I e II, III ou IV, mas não em V
    return "C - Passou em I e II, III ou IV, mas não em V";
  } else {
    // Reprovado em todas as outras situações
    return "Reprovado - Outras situações";
  }
}

// Array para armazenar as notas
var notas = [];

// Função recursiva para obter as notas uma por uma
function obterNotas(indice) {
  if (indice < 5) {
    rl.question("Digite a nota do exame " + (indice + 1) + ": ", function (resposta) {
      var nota = parseFloat(resposta);
      notas.push(nota);
      obterNotas(indice + 1);
    });
  } else {
    // Todas as notas foram coletadas, fecha a interface readline
    rl.close();
    // Verifica a classificação e imprime o resultado
    var classificacao = verificarClassificacao(notas);
    console.log("Classificação: " + classificacao);
  }
}

// Começa a coletar as notas chamando a função
obterNotas(0);
