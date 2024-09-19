// anatomia de uma função
/* function nomedafuncao() {
    //trecho de código a ser executado
}*/

function solicarNomeDoUsuario() {
    let nome = prompt("Insira o seu nome:");
    alert("O nome inserido é: " + nome );
}


//parâmetros = quando a gente declara uma função
//argumento = quando a gente invoca uma função
let resultado = 0;

//função sem retorno
function somar(x, y) {
    resultado = x + y;
    alert(resultado);
}

function imprimirNomeESobrenome(nome, sobrenome) {
    console.log(nome + " " + sobrenome);
}

somar(2, 6);
//imprimirNomeESobrenome("Júlio César", "Brito");

//função com retorno
function somarTresNumeros(primeiroNumero, segundoNumero, terceiroNumero) {
    return primeiroNumero + segundoNumero + terceiroNumero;
}

let resultadoSomaTresNumero = somarTresNumeros(5, 10, 8);
console.log('Resultado da função com retorno: ', resultadoSomaTresNumero);


//funções anônima
let soma = function (a, b) { return a + b };
console.log(soma(35, 60));

//arrow function
let subtrair = (a, b) => a - b;