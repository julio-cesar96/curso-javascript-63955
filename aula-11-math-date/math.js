// Métodos do Objeto Math
// 1 - Min & Max
console.log(Math.max(55, 109, 20000, 3)); // 20000
console.log(Math.min(55, 109, 20000, 3)); // 3
console.log(Math.max(55, Infinity, 20000, 3)); // infinito positivo
console.log(Math.min(55, -Infinity, 20000, 3)); // infinito negativo

// 2 - Ceil, Floor e Round
const pi = Math.PI;
// CEIL: retorna um inteiro > ou = ao mais proximo
console.log(Math.ceil(pi));
//FLOOR:  retonra o inteiro mais proximo arrendado pra baixo
console.log(Math.floor(pi));
//ROUND: retorna o valor de um arredondado ou o inteiro mais proximo
console.log(Math.round(pi));

// 3 - Square - retorna a raiz quadrade de um numero positivo
console.log(Math.sqrt(9));

// Random - gera um numero aleatorio entre 0 e 1
console.log(Math.random());
console.log(Math.random() * 10);

const geradorDeNumeroAleatorioEntreZeroECem = () => {
    return Math.round(Math.random() * 100);
}

console.log(geradorDeNumeroAleatorioEntreZeroECem())