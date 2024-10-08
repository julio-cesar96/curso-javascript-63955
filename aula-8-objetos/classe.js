class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar() {
        console.log ("Olá, meu nome é " + this.nome + " tenho " + this.idade + " anos e meço " + this.altura + "cm");
    }
}


const nomeDaPessoa = prompt("Qual é o seu nome?");
const idadeDaPessoa = prompt("Qual é a sua idade");
const alturaDaPessoa = prompt("Qual é a sua altura");

const usuario = new Pessoa(nomeDaPessoa, idadeDaPessoa, alturaDaPessoa);
usuario.seApresentar();