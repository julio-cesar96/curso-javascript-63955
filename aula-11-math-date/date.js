console.log(new Date()); // cria uma data atual

const data = new Date("October 23, 2024 20:40:05");
console.log(data.getMonth()); // retorna um inteiro entre 0 e 11 que representa o mes da nossa data
console.log(data.getFullYear()); // um number que representa o ano
console.log(data.getDay()); // retorna um numero que representa o dia (1 = segunda, e 7 é domigo)
console.log(data.toDateString());
console.log(data.toLocaleString());
console.log(data.toLocaleDateString());
console.log(data.toTimeString());

const natal2024 = new Date("December 25, 2024");
const anoNovo2025 = new Date("January 1, 2025");

console.log(anoNovo2025 - natal2024);
const milissegundoPorDia = 86400000
console.log((anoNovo2025 - natal2024) / milissegundoPorDia);
