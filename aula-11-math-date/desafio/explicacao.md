# Calculadora de Diferença de Datas

Este projeto consiste em um simples sistema que recebe uma data informada pelo usuário e calcula a diferença entre essa data e a data atual, exibindo o resultado em semanas, dias, horas, minutos e segundos.

## Como o sistema funciona?

### 1. Estrutura básica
A página HTML contém um campo de input do tipo "date" para que o usuário possa selecionar a data desejada. O botão "Calcular Diferença" executa a função que realiza os cálculos.

### 2. Coleta da data informada
Quando o botão é clicado, a função `calcularDiferenca()` é executada. Ela acessa a data informada pelo usuário através do input:

```javascript
const userDateInput = document.getElementById("userDate").value;
```

### 3. Verificação de data válida

Se o campo de data estiver vazio, o sistema alerta o usuário para fornecer uma data válida:

```javascript
if (!userDateInput) {
    alert("Por favor, insira uma data válida.");
    return;
}
```

### 4 . Cálculo da diferença em milissegundos
As datas informada e atual são convertidas para o tipo `Date`. A diferença entre as duas é calculada em milissegundos:

```javascript
const userDate = new Date(userDateInput);
const currentDate = new Date();
const diferencaMs = currentDate - userDate;
```

### 5. Conversão para semanas, dias, horas, minutos e segundos
Utilizando a quantidade de milissegundos em cada unidade de tempo (segundos, minutos, horas, dias, semanas), a diferença é convertida:

```javascript
const msPorSegundo = 1000;
const msPorMinuto = msPorSegundo * 60;
const msPorHora = msPorMinuto * 60;
const msPorDia = msPorHora * 24;
const msPorSemana = msPorDia * 7;

const semanas = Math.floor(diferencaMs / msPorSemana);
const dias = Math.floor((diferencaMs % msPorSemana) / msPorDia);
const horas = Math.floor((diferencaMs % msPorDia) / msPorHora);
const minutos = Math.floor((diferencaMs % msPorHora) / msPorMinuto);
const segundos = Math.floor((diferencaMs % msPorMinuto) / msPorSegundo);
```

### 6. Exibição do resultado
Finalmente, o resultado é exibido no HTML, mostrando a diferença em semanas, dias, horas, minutos e segundos:

```javascript
document.getElementById("resultado").innerHTML = 
    `Diferença: ${semanas} semanas, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos.`;
```



