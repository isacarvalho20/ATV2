const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarTriangulo(lado1, lado2, lado3) {
  if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    return 'Os lados do triângulo devem ter comprimentos positivos.';
  }

  if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
    return 'Os lados fornecidos não formam um triângulo válido.';
  }

  if (lado1 === lado2 && lado1 === lado3) {
    return 'O triângulo é equilátero.';
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return 'O triângulo é isósceles.';
  } else {
    return 'O triângulo é escaleno.';
  }
}

rl.question('Digite o comprimento do lado 1: ', (lado1) => {
  rl.question('Digite o comprimento do lado 2: ', (lado2) => {
    rl.question('Digite o comprimento do lado 3: ', (lado3) => {
      const resultado = classificarTriangulo(parseFloat(lado1), parseFloat(lado2), parseFloat(lado3));
      console.log(resultado);
      rl.close();
    });
  });
});
