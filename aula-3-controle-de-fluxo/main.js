// estrutura if
/* 
    if (condicao) {
        //bloco de código que precisa ser executado
    }
*/

// primeiro exemplo de aula - estrutura padrão de if
let idadeLaura = 15;

if (idadeLaura <= 18) {
    //console.log('Laura não pode tirar a habilitação');
}

// exemplos condicionais
let numero = 12;

if (numero == 12) {
    //console.log("Eba, número 12");
}

if (numero == 18) {
    //console.log("Não é o número 12");
}

// if...else
let nomeDoUsuario = prompt('Digite o seu nome:');

if (nomeDoUsuario == "") {
    alert("Usuário não preencheu seu nome");
} else if (nomeDoUsuario == "Julio") {
    alert ("Seja bem vindo professor" + nomeDoUsuario + ", boas aulas");
} else {
    alert("O usuário é um aluno");
}


//variáveis booleanas
let idade = 28;
let possui28anos = (idade == 28);
if (possui28anos) {
    alert("Essa pessoa possui 28 anos!");
}

//para pensar
let valor;
if (valor) {
    console.log('verdeiro');
} else {
    console.log('falso');
}

// estritamente igual
let nome1 = 'Julio';
let nome2 = 'Johan';    
let nome3 = 'Johan';

if (nome1 === nome2) {
    console.log('verdadeiro para valor e tipo');
} else {
    console.log('verdadeiro para tipo e falso para valor');
}

if (nome2 === nome3) {
    console.log('verdadeiro para tipo e valor');
} else {
    console.log('comparação falsa para valor e tipo');
}

//expressõs lógicas
let a = 5;
let b = 4;
let c = 3;
let d = 6;

if ((a > c) && (c <= d)) {
    //true
}
    // F              // V
if ((a + b > 10) || (a + b) == (c + d)) {
    //true
}

if ((a >= c) && (d >= c)) {
    //true
}

//código com bug
function verificaFamilia30(numero) {
    if (numero > 30 || numero < 40) {
        console.log(numero, "-> Família numérida do 30");
    } else {
        console.log(numero, "-> Família não identificiada");
    }
}
verificaFamilia30(30);
verificaFamilia30(35);
verificaFamilia30(20);
verificaFamilia30(50);

//codigo sem bug
function verificaFamilia30(numero) {
    if ((numero >= 30) || (numero <= 40)) {
        console.log(numero, "-> Família numérida do 30");
    } else {
        console.log(numero, "-> Família não identificiada");
    }
}
verificaFamilia30(30);
verificaFamilia30(35);
verificaFamilia30(20);
verificaFamilia30(50);


// operador AND e OR

let nome = prompt("Digite seu nome:");

     // V ou F                        // V ou F
if ((nome != "") && ((nome == "EMA") || (nome == "ema") || nome == "Ema")) {
    alert("Olá", + nome);
} else {
    alert("Erro: inserir um nome válido");
}


