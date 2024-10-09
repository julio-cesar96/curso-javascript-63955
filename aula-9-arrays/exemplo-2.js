class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase();
        this.preco = parseFloat(preco);
        this.vendido = false;
    }
    aplicarICMS() {
        this.precos = this.preco * 1.21;
    }
}

const produtos = [];
produtos.push(new Produto("coca cola 2l", "11"));
produtos.push(new Produto("arroz 5kg", "30"));
produtos.push(new Produto("pao de forma", "7"));

for (const produto of produtos) {
    produto.aplicarICMS();
    console.log(produtos);
}

