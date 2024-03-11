const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

console.log('Bem-vindo ao Jogo de Adivinhação!');
jogoAdvinhacao();

function jogoAdvinhacao() {
  rl.question('Adivinhe o número (entre 1 e 100): ', (palpite) => {
    const palpiteInt = parseInt(palpite);

    if (isNaN(palpiteInt) || palpiteInt < 1 || palpiteInt > 100) {
      console.log('Por favor, insira um número válido entre 1 e 100.');
      jogoAdvinhacao();
    } else if (palpiteInt === numeroAleatorio) {
      console.log('Parabéns! Você acertou o número secreto!');
      rl.close();
    } else if (palpiteInt < numeroAleatorio) {
      console.log('O número secreto é maior.');
      jogoAdvinhacao();
    } else {
      console.log('O número secreto é menor.');
      jogoAdvinhacao();
    }
  });
}