// alternativa 1
let desconto; // variáveis global

function calculaDesconto(preco) {
    desconto = preco * 0.3;
}
calculaDesconto(50);
console.log("desconto de 30% = R$" + desconto);

// alternativa 2
function calculaDesconto1(preco) {
    return preco * 0.3;
}
var desconto1 = calculaDesconto1(50);
console.log("Desconto de 30% = R$" + desconto1)

function saudacao() {
    let nome = "Johan" // variavel local
    console.log(nome);
}

