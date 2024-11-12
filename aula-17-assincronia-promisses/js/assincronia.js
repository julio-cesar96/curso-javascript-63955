// codigo sincrono
//console.log("Início");
//console.log("Processando....");
//console.log("Fim");

//codigo assincrono
//console.log("Inicio");
//setTimeout(()=> console.log("Processando"), 3000);
//console.log("Fim")

// Funções Assincronas
//setTimeout(funcaoASerExecutada, quantidadeDeTempoEmMilessegundos), para parar, é a clearTimeout()
const btn = document.getElementById('botao');
const popup = document.getElementById('popup');

btn.addEventListener('click', ()=>{
    popup.classList.add('popup-active');

    setTimeout(() => {
        popup.classList.remove('popup-active');
    }, 2500);
});

//setInterval() executa uma função repetidamente em intervalos definidos
let contador = 0;
const intervalo = setInterval(() => {
    console.log("Contador:", ++contador);
    if (contador === 8) clearInterval(intervalo); // para a execução após, 8 repetições
}, 3000);

//complexidades com o setTimeout
// for(let letra of "ola") {
//     setTimeout(()=> {
//         console.log(letra)
//     }, 1000)
// }

// for(let letra of "mundo") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 3000)
// }

//Call Stack
// function multiplicar(x, y) {
//     return x * y;
// }

// function numeroAoQuadro(x) {
//     let s = multiplicar(x, x);
//     console.log(s);
// }

// numeroAoQuadro(10);
