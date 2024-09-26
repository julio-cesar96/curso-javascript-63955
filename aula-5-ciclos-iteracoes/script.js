// Estrutura do for
/*
    for(contador; condição; incremento) {
        codigo a ser repetido
    }

    for (let contador = 1; contador <= 10; contador++) {
        console.log(contador);
    }
*/

// Exemplo de tabuada com for:
/*
let numero = parseInt(prompt("Olá, insira um número da sua escolha"));

for (let contador = 1; contador <= 10; contador++) {
    let resultado = numero * contador;
    console.log(numero + " x " + contador + " = " + resultado);
}
*/

// corrigindo o bug do slide numero 15

/*
let numero1 = parseInt(prompt("Inserir Número"));

function produtorio(numero1) {
    let resultado = 1;
    for (let i = 1; i <= numero1; i++) {
        resultado *= i;
    }
    console.log("Produtorio de " + numero1 + " = " + resultado);
}

produtorio(numero);
*/

// usando for com break

/*
let numero3 = parseInt(prompt("Olá, insira um número da sua escolha"));

for (let contador = 1; contador <= 10; contador++) {
    if( contador == 5) {
        break;
    }
    let resultado = numero3 * contador;
    console.log(numero3 + " x " + contador + " = " + resultado);
}
*/

//usando for com continue
let numero3 = parseInt(prompt("Olá, insira um número da sua escolha"));

for (let contador = 1; contador <= 10; contador++) {
    if( contador == 5) {
        continue;
    }
    let resultado = numero3 * contador;
    console.log(numero3 + " x " + contador + " = " + resultado);
}
