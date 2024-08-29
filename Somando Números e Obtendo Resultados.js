// Função para encontrar o maior e o menor número
function encontrarMaiorEMenor() {
  // Lê os três números inteiros
  let num1 = parseInt(prompt("Digite o primeiro número:"));
  let num2 = parseInt(prompt("Digite o segundo número:"));
  let num3 = parseInt(prompt("Digite o terceiro número:"));

  // Inicializa as variáveis maior e menor
  let maior = num1;
  let menor = num1;

  // Verifica se num2 é maior ou menor que os valores atuais
  if (num2 > maior) {
      maior = num2;
  }
  if (num2 < menor) {
      menor = num2;
  }

  // Verifica se num3 é maior ou menor que os valores atuais
  if (num3 > maior) {
      maior = num3;
  }
  if (num3 < menor) {
      menor = num3;
  }

  // Exibe o maior e o menor número
  alert("Maior número: " + maior);
  alert("Menor número: " + menor);
}

// Chama a função
encontrarMaiorEMenor();