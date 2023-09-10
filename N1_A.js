const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let idades = [];
let cidades = [];
let opinioes = [];
let contadorRegular = 0; // Variável para contar leitores que responderam 'regular'
let contadorBom = 0; // Variável para contar leitores que responderam 'bom'
let cidadesContagem = {}; // Objeto para contar leitores por cidade

function coletarDadosLeitor(i) {
  rl.question(`Informe a idade do leitor ${i}: `, (idade) => {
    rl.question(`Informe a cidade do leitor ${i}: `, (cidade) => {
      rl.question(`Informe a opinião do leitor ${i} (1-regular, 2-bom, 3-ótimo): `, (opiniao) => {
        idade = parseInt(idade);
        opiniao = parseInt(opiniao);

        idades.push(idade);
        cidades.push(cidade);
        opinioes.push(opiniao);

        if (opiniao === 1) { // Verifica se a opinião é 'regular'
          contadorRegular++;
        } else if (opiniao === 2) { // Verifica se a opinião é 'bom'
          contadorBom++;
        }

        if (cidadesContagem[cidade]) {
          cidadesContagem[cidade]++;
        } else {
          cidadesContagem[cidade] = 1;
        }

// Loop que coleta dados dos leitores

        if (i < 16) {
          coletarDadosLeitor(i + 1);
        } else {
          rl.close();
          calcularMediaIdadesOtimo();
        }
      });
    });
  });
}

// Calcula média dos leitores que avaliaram "ótimo" 

function calcularMediaIdadesOtimo() {
  let somaIdadesOtimo = 0;
  let contadorOtimo = 0;

  for (let i = 0; i < opinioes.length; i++) {
    if (opinioes[i] === 3) {
      somaIdadesOtimo += idades[i];
      contadorOtimo++;
    }
  }

  const mediaIdadesOtimo = contadorOtimo > 0 ? somaIdadesOtimo / contadorOtimo : 0;
  const porcentagemBom = (contadorBom / 16) * 100; // Calcular a porcentagem de 'bom'

// Apresenta dados

  console.log(`Média das idades dos leitores que responderam 'ótimo': ${mediaIdadesOtimo.toFixed(2)}`);
  console.log(`Quantidade de leitores que responderam 'regular': ${contadorRegular}`);
  console.log(`Porcentagem de leitores que responderam 'bom' entre todos os leitores: ${porcentagemBom.toFixed(2)}%`);
  console.log("Porcentagem de leitores para cada cidade:");
  for (let cidade in cidadesContagem) {
    const porcentagemCidade = (cidadesContagem[cidade] / 16) * 100;
    console.log(`${cidade}: ${porcentagemCidade.toFixed(2)}%`);
  }
}

coletarDadosLeitor(1);
