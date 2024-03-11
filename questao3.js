const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o dia de seu nascimento: ', (dia) => {
  rl.question('Digite o mês de seu nascimento: ', (mes) => {
    rl.question('Digite o ano de seu nascimento: ', (ano) => {
      const hoje = new Date();
      const anoAtual = hoje.getFullYear();
      const mesAtual = hoje.getMonth() + 1; // Mês atual (1 a 12)
      const diaAtual = hoje.getDate();

      const idade = anoAtual - ano;

      if (mes > mesAtual || (mes === mesAtual && dia > diaAtual)) {
        console.log(`Você tem ${idade - 1} anos.`);
      } else {
        console.log(`Você tem ${idade} anos.`);
      }

      if (idade >= 18) {
        console.log('Você é maior de idade.');
      } else {
        console.log('Você é menor de idade.');
      }

      rl.close();
    });
  });
});
