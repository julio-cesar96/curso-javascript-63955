let botao = document.querySelector("#botao1");

// usando o eventListener
// botao.addEventListener("click", () => {
//     alert("Clicou em mim")
// });

// usando a propriedade do no
// botao.onclick = () => {
//     alert("Clicou em mim")
// }

//usando o atributo onclick do html
// function handleClick() {
//     alert("Clicou em mim")
// }

// manipulando formulario
const formCadastro = document.querySelector("#formCadastro");
formCadastro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let dadosDoForm = evento.target;
    console.log(dadosDoForm.children[0].value);
    console.log(dadosDoForm.children[1].value);
})