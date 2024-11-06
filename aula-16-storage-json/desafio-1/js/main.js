function salvarItem() {
    const input = document.getElementById('item');
    const item = input.value.trim();
    
    if (item) {
        // Obtém itens existentes ou inicializa array vazio
        const itens = JSON.parse(localStorage.getItem('listaCompras') || '[]');
        
        // Adiciona novo item
        itens.push(item);
        
        // Salva no localStorage
        localStorage.setItem('listaCompras', JSON.stringify(itens));
        
        // Limpa input
        input.value = '';
        
        // Atualiza visualização
        visualizarItens();
    }
}

function visualizarItens() {
    const listaElement = document.getElementById('lista');
    const itens = JSON.parse(localStorage.getItem('listaCompras') || '[]');
    
    if (itens.length === 0) {
        listaElement.innerHTML = '<p>Nenhum item na lista</p>';
        return;
    }
    
    const listaHTML = itens
        .map(item => `<div class="item">${item}</div>`)
        .join('');
        
    listaElement.innerHTML = listaHTML;
}

function limparItens() {
    localStorage.removeItem('listaCompras');
    visualizarItens();
}