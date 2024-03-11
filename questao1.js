const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu peso (KG): ', (peso) => {
  rl.question('Digite sua altura (M): ', (altura) => {
    const pesoKG = parseFloat(peso);
    const alturaM = parseFloat(altura);

    const imc = pesoKG / (alturaM * alturaM);

    let resultado;
    if (imc < 18.5) {
      resultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
      resultado = 'Excesso de peso';
    } else if (imc >= 30 && imc <= 34.9) {
      resultado = 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
      resultado = 'Obesidade grau II';
    } else {
      resultado = 'Obesidade grau III';
    }

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Categoria: ${resultado}`);

    rl.close();
  });
});
