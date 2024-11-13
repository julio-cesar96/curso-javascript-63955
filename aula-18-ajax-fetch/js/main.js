const containerData = document.getElementById('dados');

async function fetchProdutos() {
    try {
        const response = await fetch('/data.json');
        if (!response.ok) {
            throw new Error('Erro ao buscar o arquivo JSON');
        }
        const data = await response.json();
        console.log(data);
        data.forEach((produto) => {
            let nome = produto.nome;
            let preco = produto.preco;
            const div = document.createElement('div')

            div.innerHTML = `
            <h3>${nome}</h3>
            <br>
            <p>${preco}</p>
            `
            div.classList.add('cor')
            containerData.append(div);
        });
    } catch (error) {
        console.error("Erro ao buscar os produtos: ", error)
    }
}

fetchProdutos();

async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify({
                title: 'Post do Robson',
                body: 'Post criado a partir de uma request HTTP com metodo POST',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

        const postData = await response.json();
        console.log(postData)
    } catch (error) {
        console.error('Erro ao criar post:', error);
    }
}

createPost();