// LocalStorage
localStorage.setItem('boas-vindas', 'Olá, mundo!');
localStorage.setItem('valido', true);

let isValid = localStorage.getItem('valido');

console.log(isValid);

//SessionStorage
sessionStorage.setItem('selecionados', [1,2,3]);
sessionStorage.setItem('email_usuario', 'juliobritods.96@gmail.com');

let userEmail = sessionStorage.getItem('email_usuario');
console.log(userEmail);

let userDataContainer = document.querySelector(".user-data");
const userData = document.createElement("p");
userData.innerHTML = `<p>${userEmail}<p>`;

userDataContainer.appendChild(userData);

//percorrendo a localStorage
for (let i = 1; i < localStorage.length; i++) {
    let chave = localStorage.key(i);
    console.log(`Chave: ${chave}, Valor: ${localStorage.getItem(chave)}`);
}

//percorendo a sessionStorage
for (let i = 1; i < sessionStorage.length; i++) {
    let chave = sessionStorage.key(i);
    console.log(`Chave: ${chave}, Valor: ${localStorage.getItem(chave)}`);
}

// eliminar um dado
localStorage.removeItem('valido');

// eliminar tudo
sessionStorage.clear();


//armazenando um objeto
const produto = { id: 1, nome: "Feijão" };
const produtoEmJSON = JSON.stringify(produto);
console.log(produto);
console.log(produtoEmJSON);
localStorage.setItem("produto1", produtoEmJSON);
const produtoParseado = JSON.parse(produtoEmJSON);
console.log(typeof produto);
console.log(typeof produtoEmJSON);
console.log(typeof produtoParseado);
const produto2 = JSON.parse(localStorage.getItem("produto1"));
console.log(produto2);
