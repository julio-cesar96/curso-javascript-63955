// formato de um objeto
// let nomeDoObjeto = {
//     propriedade: valor,
// }
function fruta(nome, cor, peso, tipo) {
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;
    this.tipo = tipo;
}

const fruta1 = new fruta("uva", "verde", "100g", "citrica");
const fruta2 = new fruta("manga", "amarela", "200g", "doce");

function pessoa(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.seApresentar = function () {
        console.log("Olá, meu nome é " + this.nome);
    }
}

const pessoa1 = new pessoa("Julio", 28, "186cm");
pessoa1.seApresentar();
console.log("origem" in pessoa1);


//console.log(fruta1);
//console.log(fruta2);

function seApresentar(nome) {
    console.log("Olá " + nome + ", seja bem vindo!")
}

const frutaMaca = {
    nome: "maça",
    cor: "vermelha",
    peso: "100g",
};

for (const propriedade in frutaMaca) {
    console.log(frutaMaca[propriedade]);
}