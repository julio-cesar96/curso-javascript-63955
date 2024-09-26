// let repetir = false;
//  do {
//     console.log("Executei apenas umas vez");
//  } while (repetir)

 // solicita a entrada de um numero e loop termina quando um numero não for informado
let numero = 0;
do {
    //enquanto o usuário não inserir um numero, a gente repede com do...while
    numero = prompt("Inserir um numero");
    console.log(numero);
    // o loop vai ser encerrado quando não for digitado um numero
} while (parseInt(numero));
