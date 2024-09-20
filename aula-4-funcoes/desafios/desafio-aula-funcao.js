
//arrow function
const calculadoraArrowFunction = (numero1, numero2, operacao) => {
    if (operacao == "+") {
        return numero1 + numero2;
    }

    if (operacao == "-") {
        return numero1 - numero2;
    }

    if (operacao == "*") {
        return numero1 * numero2;
    }

    if (operacao == "/") {
        return numero1 / numero2;
    } else {
        return 0;
    } 
  
}
alert(calculadoraArrowFunction(5, 6, "+"));