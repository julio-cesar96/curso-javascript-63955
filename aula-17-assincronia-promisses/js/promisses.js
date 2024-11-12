// Promisses

// const eventoFuturo = (resposta) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resposta === true ? resolve("Promessa resolvda") : reject ("Promessa rejeitada")
//         }, 2000)
//     })
// }

// console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));

const promessa = new Promise((resolve, reject) => {
    let sucesso = true;
    setTimeout(() => {
        if (sucesso) resolve("Operação concluida");
        else reject("Erro na operação")
    }, 2000)
});

// promessa
//     .then(resultado => console.log("Sucesso", resultado))
//     .catch(erro => console.log("Erro:", erro))
//     .finally(() => console.log("Promessa finalizada"));

// async e await - simplica as nossas promisses
// async - indica que a função é assincrona e retorna uma Promise.
// await - Pausa a execução até que a Promise seja resolvida ou rejeitada.

async function executarPromise() {
    try {
        const resultado = await promessa;
        const maisResultados = await novaPromessa();
        console.log("Resultado: ", resultado);
        console.log("Mais Resultados: ", maisResultados);
    } catch (erro) {
        console.log("Erro com o await: ", erro);
    } 
}

executarPromise();