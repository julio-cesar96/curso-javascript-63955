// Função para calcular o valor total com juros
function calcularEmprestimo(valor, meses, taxaJuros) {
    let valorComJuros = valor * Math.pow((1 + taxaJuros / 100), meses);
    return valorComJuros;
}

// Função para calcular as parcelas decrescentes
function calcularParcelasDecrescentes(valor, meses, taxaJuros) {
    let saldoDevedor = valor;
    let parcelas = [];
    
    for (let i = 0; i < meses; i++) {
        let jurosMensal = saldoDevedor * (taxaJuros / 100);
        let amortizacao = valor / meses;
        let parcela = amortizacao + jurosMensal;
        parcelas.push(parcela.toFixed(2));
        saldoDevedor -= amortizacao;
    }

    return parcelas;
}

// Capturar dados do usuário
let valorEmprestimo = parseFloat(prompt("Informe o valor do empréstimo:"));
let meses = parseInt(prompt("Informe em quantas parcelas (meses) quer pagar:"));
let taxaJuros = 1.5; // Juros fixos de 1,5% ao mês

// Calcular o valor total do empréstimo com juros
let valorTotal = calcularEmprestimo(valorEmprestimo, meses, taxaJuros);

// Calcular as parcelas decrescentes
let parcelas = calcularParcelasDecrescentes(valorEmprestimo, meses, taxaJuros);

// Exibir o resultado
console.log(`Valor total com juros: R$ ${valorTotal.toFixed(2)}`);
console.log("Valor das parcelas (decrescentes):");

parcelas.forEach((parcela, index) => {
    console.log(`Parcela ${index + 1}: R$ ${parcela}`);
});
