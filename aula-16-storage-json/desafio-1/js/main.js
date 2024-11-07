// Classe para representar um Produto
class Produto {
    constructor(nome, valor, quantidade) {
        this.id = Date.now(); // Gera um ID único baseado no timestamp
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

// Array para armazenar os produtos
let produtos = [];

// Função para inicializar a aplicação
function inicializarAplicacao() {
    const produtosArmazenados = localStorage.getItem('listaCompras');
    if (produtosArmazenados) {
        produtos = JSON.parse(produtosArmazenados);
        visualizarItens();
    } else {
        document.getElementById('lista').innerHTML = '<p>O carrinho está vazio!</p>';
    }
}

function salvarItem() {
    const nomeInput = document.getElementById('nome');
    const valorInput = document.getElementById('valor');
    const quantidadeInput = document.getElementById('quantidade');
    
    const nome = nomeInput.value.trim();
    const valor = parseFloat(valorInput.value);
    const quantidade = parseInt(quantidadeInput.value);
    
    if (nome && !isNaN(valor) && !isNaN(quantidade) && quantidade > 0) {
        // Cria novo produto
        const novoProduto = new Produto(nome, valor, quantidade);
        
        // Adiciona ao array de produtos
        produtos.push(novoProduto);
        
        // Salva no localStorage
        localStorage.setItem('listaCompras', JSON.stringify(produtos));
        
        // Limpa inputs
        nomeInput.value = '';
        valorInput.value = '';
        quantidadeInput.value = '';
        
        // Atualiza visualização
        visualizarItens();
    } else {
        alert('Por favor, preencha todos os campos corretamente!');
    }
}

function visualizarItens() {
    const listaElement = document.getElementById('lista');
    
    if (produtos.length === 0) {
        listaElement.innerHTML = '<p>O carrinho está vazio!</p>';
        return;
    }
    
    const listaHTML = produtos
        .map(produto => `
            <div class="item" data-id="${produto.id}">
                <h3>${produto.nome}</h3>
                <p>Valor: R$ ${produto.valor.toFixed(2)}</p>
                <p>Quantidade: ${produto.quantidade}</p>
                <p>Total: R$ ${(produto.valor * produto.quantidade).toFixed(2)}</p>
                <button onclick="removerItem(${produto.id})">Remover</button>
            </div>
        `)
        .join('');
        
    listaElement.innerHTML = listaHTML;
}

function removerItem(id) {
    produtos = produtos.filter(produto => produto.id !== id);
    localStorage.setItem('listaCompras', JSON.stringify(produtos));
    visualizarItens();
}

function limparItens() {
    produtos = [];
    localStorage.removeItem('listaCompras');
    visualizarItens();
}

// Inicializa a aplicação quando a página carrega
window.onload = inicializarAplicacao;