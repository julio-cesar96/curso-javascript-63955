// 1 - operador ternarnio -> ajuda a gente a simplificar a nossa estrutura de if e else
// condição ? execução em caso de true : execução em caso de false

// usando if...else
let quantidadeDeBrasileiros = 7;
if (quantidadeDeBrasileiros > 5) {
    alert("É pentacampeão");
} else {
    alert("Não é pentacampeao");
}
// usando o operador ternario
quantidadeDeBrasileiros > 5 ? alert("pentacampeão") : alert("não é pentacampeão");



// 2 - operador lógico And -> reduz uma condiçao, em caso de if com um unico bloco de execução
//usando if simples
const carrinho = [];
if (carrinho.length === 0) {
    console.log("Carrinho vazio");
}
// usando operador logico And
carrinho.length === 0 && console.log("Carrinho vazio");

// 3 - operador lógico Or -> usado para quando queremos um OU outro
const user1 = {
    nome: "Juliao",
    idade: 28
}
const user2 = null;
console.log(user1 || "Usuário não existe") // imprime o objeto
console.log(user2 || "O usuário não existe") // o usuário não existe

const carrinhoAntigo = ["mouse", "fone", "cabo usb"];
let carrinhoo = carrinhoAntigo || [];
console.log(carrinhoo)

// 4 - Operador Nullish Coalescing -> funciona com o operador OR ( || ) porém aceita mais valores como verdadeiros
console.log(0 ?? "Nullish");
console.log(undefined ?? "Nullish") // nullished
console.log(null ?? "Nullish") // nuliished

/// Operações em Objetos ///
// Acessando de forma condicional umo objeto
let usuarioRobson = {
    nome: "Robson",
    idade: 40,
    cursos: {
        javascript: "em andamento",
    }
}
console.log(usuarioRobson?.cursos?.javascript || "prop não existe"); // em andamento
console.log(usuarioRobson?.cursos?.html || "prop não existe"); // a prop não existe

// Desestruturação -> processo de criar variáveis que vão armazenar as props de um objeto de maneira direta
let { nome } = usuarioRobson; // desestruturação simples
let { cursos: { javascript } } = usuarioRobson; // destruturação de uma prop mais interna

// Alias -> é quando a gente declara a variavel com um nome alternativo apos a desestruturação do objeto
const item = {
    id: 40,
    nomeProduto: "Camisa do Flamengo",
    precoUnitario: 240
}

const { id: idDoProduto, nomeProduto: mercadoria, precoUnitario: precoPorUnidade } = item;
console.log(mercadoria); // camisa do flamengo

// Descontrução de parametros
const produtoNovo = {
    id: 1,
    nomeDoProduto: "Curso de JS",
    preco: 750
}

function desestruturar(objeto) {
    const { nomeDoProduto, preco } = objeto;
    console.log(nomeDoProduto, preco);
}

desestruturar(produtoNovo);

// Desestruturação de Arrays
const alunos = ["Matheus", "Laura", "Jefferson", "Robson", "Johan"];
const [, , , aluno4, aluno5] = alunos;
console.log(aluno4);
console.log(aluno5);

// Spread ->  espalhar um array ou um objeto, ou seja, a gente muda a forma como apresentamos essa estrutura....

//Spread em Arrays
console.log(...alunos);

// Aplicação prática
const numeros = [10, 230, 59, 900, 40390943];
console.log(Math.max(...numeros));

const alunos1 = ["Robson", "Laura", "Jefferson", "Isabella"];
const professores = ["Juliao", "Jorge"];


const turmaJS = [...alunos1, ...professores];
console.log(turmaJS);

const objetoTurmaJS = {
    ...turmaJS
}

console.log(objetoTurmaJS)

// Spread de Objetos
const cursoJS = {
    nome: "Curso de Javascript",
    quantidadeDeHoras: 80,
    tipo: "ead"
}

const cursoJSAtualizado = {
    ...cursoJS,
    quantidadeDeTurmas: 20,
    reponsavel: "Juliao"
}

console.log(cursoJSAtualizado);

// Parametros rest (Rest Parameters)
function somar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0)
}

console.log(somar(10,20,40,238283032, 29,398));
