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

const laura = new Pessoa("Laura", 37, 163);
laura.seApresentar();