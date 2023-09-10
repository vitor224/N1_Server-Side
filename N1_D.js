const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Preços das carnes
const precosAte5Kg = {
  'File Duplo': 24.90,
  'Alcatra': 25.90,
  'Picanha': 36.90
};

const precosAcima5Kg = {
  'File Duplo': 25.80,
  'Alcatra': 26.80,
  'Picanha': 37.80
};

// Função para calcular o preço total da compra
function calcularPrecoTotal(tipoCarne, quantidadeKg) {
  if (quantidadeKg <= 5) {
    return precosAte5Kg[tipoCarne] * quantidadeKg;
  } else {
    return precosAcima5Kg[tipoCarne] * quantidadeKg;
  }
}

// Função para calcular o valor do desconto (5% se pagamento no cartão Tabajara)
function calcularDesconto(pagamentoCartao) {
  return pagamentoCartao ? 0.05 : 0;
}

// Função para imprimir o cupom fiscal
function imprimirCupom(tipoCarne, quantidadeKg, pagamentoCartao) {
  const precoTotal = calcularPrecoTotal(tipoCarne, quantidadeKg);
  const desconto = calcularDesconto(pagamentoCartao);
  const valorAPagar = precoTotal * (1 - desconto);

  console.log('----- Cupom Fiscal -----');
  console.log('Tipo de carne: ' + tipoCarne);
  console.log('Quantidade (Kg): ' + quantidadeKg);
  console.log('Preço total: R$ ' + precoTotal.toFixed(2));
  console.log('Tipo de pagamento: ' + (pagamentoCartao ? 'Cartão Tabajara' : 'Dinheiro'));
  console.log('Valor do desconto: R$ ' + (desconto * precoTotal).toFixed(2));
  console.log('Valor a pagar: R$ ' + valorAPagar.toFixed(2));
}

// Solicitar informações ao usuário
rl.question('Digite o tipo de carne (File Duplo, Alcatra ou Picanha): ', function(tipoCarne) {
  rl.question('Digite a quantidade (Kg): ', function(quantidadeKg) {
    rl.question('Pagamento no cartão Tabajara (S para Sim, N para Não): ', function(pagamentoCartao) {
      tipoCarne = tipoCarne.trim();
      pagamentoCartao = pagamentoCartao.trim().toUpperCase() === 'S';

      imprimirCupom(tipoCarne, parseFloat(quantidadeKg), pagamentoCartao);
      rl.close();
    });
  });
});
