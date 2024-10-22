
function calcularDiferenca() {
    const userDateInput = document.getElementById("userDate").value;

    if (!userDateInput) {
        alert("Por favor, insira uma data válida.");
        return;
    }

    const userDate = new Date(userDateInput);
    const currentDate = new Date();

    // Calcula a diferença em milissegundos
    const diferencaMs = currentDate - userDate;

    // Conversões
    const msPorSegundo = 1000;
    const msPorMinuto = msPorSegundo * 60;
    const msPorHora = msPorMinuto * 60;
    const msPorDia = msPorHora * 24;
    const msPorSemana = msPorDia * 7;

    const semanas = Math.floor(diferencaMs / msPorSemana);
    const dias = Math.floor((diferencaMs % msPorSemana) / msPorDia);
    const horas = Math.floor((diferencaMs % msPorDia) / msPorHora);
    const minutos = Math.floor((diferencaMs % msPorHora) / msPorMinuto);
    const segundos = Math.floor((diferencaMs % msPorMinuto) / msPorSegundo);

    document.getElementById("resultado").innerHTML =
        `Diferença: ${semanas} semanas, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos.`;
}