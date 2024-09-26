## Explicação do código:

# Função `verificarMultiplo`:

- Recebe dois números como parâmetros (`a` e `b`).
- Usa o operador % (módulo) para verificar se o resto da - divisão de `a` por `b` é zero.
- Retorna `true` se forem múltiplos, caso contrário retorna `false`.

# Função `executarVerificacao`:

- Solicita ao usuário dois números usando a função `prompt`.
- Converte os números de texto para inteiros com `parseInt`.
- Verifica se o segundo número é zero (pois não podemos dividir por zero).
- Usa a função `verificarMultiplo` para determinar se o primeiro número é múltiplo do segundo e exibe o resultado com alert.
