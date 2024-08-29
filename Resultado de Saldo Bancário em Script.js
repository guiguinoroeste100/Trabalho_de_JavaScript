// Obtém uma referência ao elemento onde queremos exibir a tabuada
const resultadoElement = document.getElementById("resultado");

// Inicializa uma string vazia para armazenar os resultados
let tabuadaSete = "";

// Calcula a tabuada do 7
for (let i = 1; i <= 10; i++) {
  const resultado = 7 * i;
  tabuadaSete += `7 x ${i} = ${resultado}<br>`;
}

// Insere a tabuada no elemento
resultadoElement.innerHTML = tabuadaSete;