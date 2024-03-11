const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor que deseja sacar: ', (valor) => {
  const valorSaque = parseInt(valor);

  if (isNaN(valorSaque) || valorSaque <= 0 || valorSaque % 10 !== 0) {
    console.log('Valor inválido. Digite um valor múltiplo de 10.');
  } else {
    console.log('Saque realizado com sucesso.');
  }

  rl.close();
});
