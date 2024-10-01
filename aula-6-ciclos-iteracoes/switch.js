// anamotia do switch...case
/*
switch(condicao) {
    case 1:
        bloco de codigo;
        break;
    caso 2:
        bloco de codigo;
        break;
    default:
        bloco de codigo;
        break;
}
*/

// programa que exibe uma mensagem de acordo com o nome informado. O programa se encerra quando a entrada for sair.
let entrada = prompt("Olá, insira o seu nome");
while (entrada != "sair") {
    switch (entrada) {
        case "Julio":
            alert("Olá Júlio");
            break;
        case "Robson":
            alert("Ola Robson");
            break;
        default:
            alert("Qual é o seu nome?");
            break; 
    }
    entrada = prompt("Digite seu nome:");
}