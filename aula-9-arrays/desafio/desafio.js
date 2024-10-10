// 1. Criar um array vazio para armazenar os nomes
let nomes = [];

// 2. Usar um loop para solicitar os nomes enquanto o usuário não digitar "fim"
let nome;
do {
  nome = prompt("Digite um nome ou 'fim' para encerrar:");
  if (nome.toLowerCase() !== "fim") {
    nomes.push(nome); // 3. Adicionar o nome no array, se não for "fim"
  }
} while (nome.toLowerCase() !== "fim");

// 4. Percorrer o array e exibir cada nome no console
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
