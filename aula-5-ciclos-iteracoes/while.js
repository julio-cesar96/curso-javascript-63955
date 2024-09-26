// exemplo de loop infinito
/* 
let repetir = true;
while (repetir) {
    console.log("Ao infinito e...Além!");
}
*/

// exemplo de loop com final usando while
/*let entradaDeDados = prompt("Ola, insira um dado:");

while (entradaDeDados != "sair") {
    entradaDeDados = prompt("Insira um novo dado");
}
*/

// algoritmo que calcula o fatorial com base num numero recebido

function calcularFatorial(numero) {
    // variavel para guardar o resultado
    let resultado = 1;

    // variavel para ser o contador decrescente
    let contador = numero;

    // while que vai continuar enquanto o nosso contador for maior que 0
    while (contador > 0) {
        // multiplica o resultado atual pelo contador
        resultado *= contador;
        // diminui o contador em 1 a cada nova iteração
        contador--;
    }

    return resultado;
}

console.log(calcularFatorial(4));

console.log(calcularFatorial(10));