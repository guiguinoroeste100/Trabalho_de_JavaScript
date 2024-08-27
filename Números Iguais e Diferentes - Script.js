// Solicita ao usuário para inserir o primeiro número
let numero1 = prompt("Insira o primeiro número:");

// Solicita ao usuário para inserir o segundo número
let numero2 = prompt("Insira o segundo número:");

// Converte as entradas para números
numero1 = Number(numero1);
numero2 = Number(numero2);

// Verifica se os números são iguais
if (numero1 === numero2) {
    alert("Os números são iguais.");
} else {
    alert("Os números são diferentes.");
}
