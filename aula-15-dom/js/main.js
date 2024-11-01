// 1 - Acessando elementos da DOM
// pegando uma tag html a partir do atributo id
let titulo = document.getElementById("titulo");
let paragrafo = document.getElementById("paragrafo");
console.log(titulo);
console.log(paragrafo);

// pegando tags a partir do atributo class
let paises = document.getElementsByClassName("paises");
console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);

//pegando elementos a partir do nome da tag
let div = document.getElementsByTagName("div");
console.log(div);

//pegando o primeiro elemento que corresponda com o parametro da busca
let container = document.querySelector("#container");
console.log(container);
let texto = document.querySelector(".texto");
console.log(texto);

// pegando uma coleção de elementos
let elementos = document.querySelectorAll("p");
console.log(elementos);

// capturando pseudo classes
//let checkBoxChecked = document.querySelector(".radio:checkd");


// 2 - Modificar elementos da DOM

// alterar o texto de algum elemento
const textoModificado = document.querySelector(".texto");
console.log("Tag que tenha a classe .texto:", textoModificado.innerText);
textoModificado.innerText = "Olá, bem vindo a Coder House!";
console.log(textoModificado);;

// accessa e definir html interno do elemento
let containerFull = document.querySelector(".container-full");
containerFull.innerHTML = "<h2> Olá, seja bem vindo/a/e a minha aula! </h2>";
containerFull.className = "blue"


// 3 - Criando e Deletando elementos da DOM

// criando um elemento
let paragrafoNovo = document.createElement("p");
paragrafoNovo.innerHTML = "Lorem Ipsum Lorem Ipsum, Lorem ipsum.....";
document.body.appendChild(paragrafoNovo);

// removendo elemento
paragrafoNovo.remove();

// Obtendo dados do input
document.getElementById("nome").value = "Julio"
document.getElementById("idade").value = 28;


// criando uma lista a partir de um array
let lista = document.getElementById("alunos");
let alunos = ["Robson", "Jefferson", "Priscilla", "Matheus", "Diego", "Laura", "Isabella"];
for (const aluno of alunos) {
    let li = document.createElement("li");
    li.innerHTML = aluno;
    lista.appendChild(li);
}

// criando elementos a partir de um objeto
let sectionDestinos = document.querySelector(".container-destinos-turistico")
const destinos = [
    { id: 1, nome: "Porto Seguro"},
    { id: 2, nome: "Arraial do Cab"},
    { id: 3, nome: "Gramado"},
    { id: 4, nome: "São João Del Rey"}
];

for (destino of destinos) {
    let containerDestinos = document.createElement("div");
    containerDestinos.innerHTML = `
        <h3> id: ${destino.id} </h3>
        <p> cidade: ${destino.nome} </p>
    `;
    sectionDestinos.appendChild(containerDestinos);
}


