// Eliminando qualquer elemento de um array
const alunos = ["Laura", "Matheus", "Robson", "Jorge", "Johan"];
console.log(alunos);

const removerAluno = (nome) => {
    // descobrir o indice do aluno a ser removido
    let index = alunos.indexOf(nome);

    //verifico se ele existe dentro do array, se sim, eu elimino ele com o splice
    if(index != -1) {
        alunos.splice(index, 1);
        console.log(alunos);
    } else {
        console.log("O aluno " + nome + " não consta na lista de presença!");
    }
}

const adicionarAluno = (nome) => {

    //verificar se ele existe no array, se não existir, eu adiciono
    if(alunos.indexOf(nome) === -1) {
        alunos.push(nome);
        console.log(alunos)
    } else {
        console.log("O aluno " + nome + "consta na lista de presença!");
    }
}

let alunoAAdicionar = prompt("Digite o nome do aluno a ser removido: ");
adicionarAluno(alunoAAdicionar);
