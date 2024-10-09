// array de objeto

// const produto = {
//     id: 1,
//     nome: "coca cola"
// }

// const produtos = [produto, {
//     id: 2,
//     nome: "suco de maracuja"
// }]

// console.log(produtos);
// produtos.push({
//     id: 3,
//     nome: "pão francês"
// })
// console.log(produtos)

const produtos = [
    {
        id: 1,
        nome: "coca cola"
    },
    {
        id: 2,
        nome: "suco de maracuja"
    },
    {
        id: 3,
        nome: "pão frances"
    },
    {
        id: 4,
        nome: "macarrao"
    }
]

for (produto of produtos) {
    console.log(produto.id, produto.nome);
}
