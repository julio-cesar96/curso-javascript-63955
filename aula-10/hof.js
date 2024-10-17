//forEach -> para cada elemento do array, executa uma função
const numeros = [1,2,3,4,5,6];

numeros.forEach((numero) => {
    console.log(numero);
});

//find -> retorna o primeiro elemento do array que satisfaça a condição
const cursos = [
    { nome: 'Javascript', preco: 400 },
    { nome: 'ReactJS', preco: 600 },
];

const cursoDeFront = cursos.find((nomeDoCurso) => nomeDoCurso.nome === 'ReactJS')
const cursoDeBack = cursos.find((nomeDoCurso) => nomeDoCurso.nome === 'Python')

console.log(cursoDeFront);
console.log(cursoDeBack);

// filter -> retorna um novo array com os elementos que cumpram a condiçao
const cursosDeFrontEnd = [
    { nome: 'HTML e CSS', preco: 300 },
    { nome: 'JavaScript', preco: 500 },
    { nome: 'Sass', preco: 250 },
    { nome: 'ReactJS', preco: 900 },
    { nome: 'AngularJS', preco: 950 },
    { nome: 'VueJS', preco: 1000 },
];

const cursoComJavaScript = cursosDeFrontEnd.filter((cursoComJS) => cursoComJS.nome.includes("JS"));
const cursosMaisBaratos = cursosDeFrontEnd.filter((cursoBaratos) => cursoBaratos.preco <= 500);

console.log(cursoComJavaScript);
console.log(cursosMaisBaratos);

//some -> retorna true ou false a cada se o item passado como parametro existir no array
console.log(cursosDeFrontEnd.some((nomeDoCurso) => nomeDoCurso.nome === "Sass"));
console.log(cursosDeFrontEnd.some((nomeDoCurso) => nomeDoCurso.nome === "TDD"));

// map -> retorna um novo array com todos os elementos do array original transformados de acordo com a operaçao informada.
const nomeDosCursos = cursosDeFrontEnd.map((nomeDoCurso) => nomeDoCurso.nome);
console.log(nomeDosCursos);

const cursosDeFrontEndComPrecoAtualizado = cursosDeFrontEnd.map((cursos) => {
    return {
        nome: cursos.nome,
        preco: cursos.preco * 1.5
    }
});
console.log(cursosDeFrontEnd);
console.log(cursosDeFrontEndComPrecoAtualizado);

//reduce -> retorna um único valor de apos iterar sobre todo o array
// 1 -> função que ordena o que a quer resumir do array (acumalador). 2 -> o valor inicial do acumulador
const custoTotalFormacaoFrontEnd = cursosDeFrontEndComPrecoAtualizado.reduce((soma, cursos) => soma + cursos.preco, 0);
console.log(custoTotalFormacaoFrontEnd);

//sort -> reordena um array a partir de uma condição
const numerosForaDeOrdem = [2, 1, 90, 87, 5];
console.log(numerosForaDeOrdem);
const numerosEmOrdemCrescente = numerosForaDeOrdem.sort((primeiroNumero, segundoNumero) => primeiroNumero - segundoNumero);
console.log(numerosEmOrdemCrescente);

