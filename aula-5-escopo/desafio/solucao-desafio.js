// Função que verifica se o número 'a' é múltiplo do número 'b'
function verificarMultiplo(a, b) {
    // Se o resto da divisão de 'a' por 'b' for igual a 0, significa que 'a' é múltiplo de 'b'
    if (a % b === 0) {
        return true; // Retorna verdadeiro se for múltiplo
    } else {
        return false; // Retorna falso se não for múltiplo
    }
}

// Função principal que executa o programa
function executarVerificacao() {
    // Inserindo os números a serem verificados
    let numero1 = prompt("Digite o primeiro número:");
    let numero2 = prompt("Digite o segundo número:");
    
    // Convertendo os valores inseridos de string para número
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    // Verificando se o segundo número é diferente de zero (não podemos dividir por zero)
    if (numero2 === 0) {
        alert("O segundo número não pode ser zero.");
        return; // Encerra a execução se o segundo número for zero
    }

    // Verifica se 'numero1' é múltiplo de 'numero2'
    if (verificarMultiplo(numero1, numero2)) {
        alert(numero1 + " é múltiplo de " + numero2);
    } else {
        alert(numero1 + " não é múltiplo de " + numero2);
    }
}

// Executa o programa ao carregar a página
executarVerificacao();
