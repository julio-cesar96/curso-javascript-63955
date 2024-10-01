
# Explicação Detalhada do Código de Simulação de Empréstimo em JavaScript

## Entendimento Geral

Esse código simula um empréstimo bancário. O usuário informa o valor que ele quer tomar emprestado e a quantidade de meses que ele quer para pagar. Em cima disso, calculamos o valor total do empréstimo (somando os juros) e depois calculamos o valor de cada parcela. As parcelas são decrescentes, o que significa que a cada mês, a parcela vai ficando um pouco menor.

## Parte 1: Estrutura do Código e Organização

Quando você começa a programar, é muito comum querer fazer tudo de uma vez em um único bloco. Porém, uma boa prática é organizar o código em pequenas partes (funções) que executam tarefas específicas. Isso torna o código mais fácil de entender, modificar, testar e reutilizar.

No nosso código, temos duas funções principais:
1. **`calcularEmprestimo`**: Calcula o valor total do empréstimo com os juros.
2. **`calcularParcelasDecrescentes`**: Calcula o valor de cada parcela.

Separar essas lógicas em funções tem um motivo: podemos testar e modificar cada uma delas individualmente sem afetar o restante do programa.

## Parte 2: Função `calcularEmprestimo`

```javascript
function calcularEmprestimo(valor, meses, taxaJuros) {
    let valorComJuros = valor * Math.pow((1 + taxaJuros / 100), meses);
    return valorComJuros;
}
```

### Explicação:
- **Objetivo**: Essa função calcula o valor total do empréstimo, considerando os juros compostos. 
- **Parâmetros**:
  - `valor`: O valor que o usuário deseja emprestado.
  - `meses`: O número de meses em que o usuário deseja pagar o empréstimo.
  - `taxaJuros`: A taxa de juros mensal (no nosso caso, é fixada em 1,5% ao mês).
  
- **Fórmula dos Juros Compostos**: O cálculo de juros compostos segue a fórmula:

  \[
  M = P 	imes (1 + i)^n
  \]

  Onde:
  - \( M \) é o valor total com juros.
  - \( P \) é o valor inicial (empréstimo).
  - \( i \) é a taxa de juros em decimal (no caso, 1,5% vira 0,015).
  - \( n \) é o número de períodos (meses).

  Para aplicar essa fórmula no JavaScript, usamos a função **`Math.pow`**. Essa função calcula a potência de um número, ou seja, ela eleva \( 1 + i \) à potência do número de meses.

## Parte 3: Função `calcularParcelasDecrescentes`

```javascript
function calcularParcelasDecrescentes(valor, meses, taxaJuros) {
    let saldoDevedor = valor;
    let parcelas = [];
    
    for (let i = 0; i < meses; i++) {
        let jurosMensal = saldoDevedor * (taxaJuros / 100);
        let amortizacao = valor / meses;
        let parcela = amortizacao + jurosMensal;
        parcelas.push(parcela.toFixed(2));
        saldoDevedor -= amortizacao;
    }

    return parcelas;
}
```

### Explicação:
- **Objetivo**: Essa função calcula as parcelas com base no saldo devedor restante e nos juros mensais. 
  - O saldo devedor vai diminuindo à medida que o usuário vai pagando o empréstimo.
  - Cada parcela tem uma parte de amortização (que é uma fração do valor total) e uma parte de juros.

- **Passo a Passo**:
  - Inicializamos o **`saldoDevedor`** com o valor total do empréstimo.
  - Criamos um array vazio chamado **`parcelas`** para armazenar o valor de cada parcela.
  
  Dentro do laço `for` (que vai de 0 até o número de meses):
  1. Calculamos os juros daquele mês, multiplicando o saldo devedor atual pela taxa de juros. No primeiro mês, esse valor será maior, pois ainda temos todo o valor do empréstimo para pagar.
  2. A amortização é a mesma para cada mês, que é simplesmente o valor total do empréstimo dividido pelo número de meses. É a parte que vai diretamente para reduzir o saldo devedor.
  3. A parcela é a soma da amortização e dos juros. Salvamos o valor da parcela no array **`parcelas`**.
  4. Subtraímos a amortização do saldo devedor, reduzindo o valor para o cálculo do próximo mês.

- **Parcelas Decrescentes**: As parcelas diminuem porque, a cada mês, o saldo devedor fica menor, então a parte dos juros na parcela também fica menor.

- **`toFixed(2)`**: Esse método garante que o número de cada parcela seja exibido com duas casas decimais, como no formato de moeda.

## Parte 4: Capturando Dados do Usuário

```javascript
let valorEmprestimo = parseFloat(prompt("Informe o valor do empréstimo:"));
let meses = parseInt(prompt("Informe em quantas parcelas (meses) quer pagar:"));
let taxaJuros = 1.5; // Juros fixos de 1,5% ao mês
```

- **`prompt()`**: Essa função permite que o usuário insira dados no navegador. Os valores retornados pelo `prompt` são strings, então usamos `parseFloat` e `parseInt` para converter essas strings em números:
  - **`parseFloat`**: Converte uma string em um número decimal (usado para o valor do empréstimo).
  - **`parseInt`**: Converte uma string em um número inteiro (usado para o número de meses).
  
A taxa de juros é fixa (1,5%), então já deixamos esse valor declarado diretamente no código.

## Parte 5: Cálculos e Exibição

```javascript
let valorTotal = calcularEmprestimo(valorEmprestimo, meses, taxaJuros);
let parcelas = calcularParcelasDecrescentes(valorEmprestimo, meses, taxaJuros);

console.log(`Valor total com juros: R$ ${valorTotal.toFixed(2)}`);
console.log("Valor das parcelas (decrescentes):");

parcelas.forEach((parcela, index) => {
    console.log(`Parcela ${index + 1}: R$ ${parcela}`);
});
```

- **`calcularEmprestimo`** e **`calcularParcelasDecrescentes`**: Aqui, chamamos as funções que criamos antes para calcular o valor total do empréstimo e as parcelas decrescentes.

- **Exibição no Console**: 
  - Usamos o `console.log()` para exibir o valor total do empréstimo com os juros e também as parcelas, uma por uma.
  - **`forEach`**: Esse método percorre o array de parcelas e imprime o valor de cada uma delas. A variável `index` nos dá o número da parcela, e `parcela` é o valor da parcela.

## Resumo Final

O que você está aprendendo com esse exercício:
- **Funções**: Como dividir o código em blocos reutilizáveis.
- **Laços e Arrays**: Como gerar e armazenar valores de parcelas.
- **Juros Compostos**: Um exemplo real de uso de matemática em programação.
- **Interação com o Usuário**: Como pedir dados e exibi-los de forma simples com `prompt` e `console.log`.

Este é um código simples, mas poderoso para entender o básico de programação e como calcular algo útil como parcelas de um empréstimo.
