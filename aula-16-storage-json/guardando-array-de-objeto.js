// Armazenando um array de objetos no localStorage

const produtos = [
    { id: 1, nome: "Fone Bluetooh", preco: 200 },
    { id: 2, nome: "PS5 Slim", preco: 3800 }, 
    { id: 3, nome: "Headseat Gamer", preco: 190 },
    { id: 4, nome: "Teclado Mecanico", preco: 300 }
];

const armazenarNoLocalStorage = (chave, valor) => {
    localStorage.setItem(chave, valor);
}
// produto a produto
for (const produto of produtos) {
    armazenarNoLocalStorage(produto.id, JSON.stringify(produto));
}
// armazenando todo o array
armazenarNoLocalStorage("listaDeProdutos", JSON.stringify(produtos));
// Armazenando um array de objetos no localStorage


//Pegando um array armazenado
class Produto {
    constructor(obj) {
        this.nome = obj.produto.toUpperCase();
        this.preco = parseFloat(obj.preco);
    }

    somarICMS() {
        this.preco = this.preco * 1.21;
    }
}

// pegando a lista de produtos armazenadas
const produtosArmazenados = JSON.parse(localStorage.getItem("listaDeProdutos"));
const products = [];
for (const objeto of produtosArmazenados) {
    products.push(new Produto(objeto));
}
for (const produto of products) {
    produto.somarICMS();
}

// consultando storage no momento em que ele é iniciado
let usuario;
let usuarioNoLocalStorage = localStorage.getItem("usuario");

if (usuarioNoLocalStorage) {
    usuario = usuarioNoLocalStorage;
    console.log(usuario);
} else {
    usuario = prompt("Insira o nome do usuário");
    localStorage.setItem("usuario", usuario);
}