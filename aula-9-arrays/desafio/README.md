# Exercício: Inserindo Nomes em um Array com JavaScript

Neste exercício, você vai praticar como usar loops, arrays e o comando `prompt()` em JavaScript. O objetivo é receber nomes do usuário e inseri-los em um array até que a palavra "fim" seja digitada. Após isso, o programa exibe todos os nomes inseridos no console.

## Etapas do Exercício:

1. **Criar um array vazio**:
   - Primeiro, criamos um array vazio chamado `nomes` para armazenar os nomes inseridos pelo usuário.

2. **Solicitar nomes ao usuário**:
   - Usamos um loop `do...while` para pedir que o usuário insira nomes. O loop continua até que o usuário digite "fim".
   - Se o nome inserido não for "fim", ele é adicionado ao array.

3. **Exibir os nomes inseridos**:
   - Depois que o usuário terminar de inserir nomes, percorremos o array com um loop `for` e exibimos cada nome no console.

## Regras:
- A palavra "fim" não deve ser adicionada ao array.
- O exercício usa o método `prompt()` para interagir com o usuário.

## Código:

```javascript
let nomes = [];
let nome;

do {
  nome = prompt("Digite um nome ou 'fim' para encerrar:");
  if (nome.toLowerCase() !== "fim") {
    nomes.push(nome);
  }
} while (nome.toLowerCase() !== "fim");

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
```
