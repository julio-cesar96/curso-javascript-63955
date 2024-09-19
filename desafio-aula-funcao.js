function calculadora(numero1, numero2, operacao) {
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
console.log(calculadora(10, 6, "+"));