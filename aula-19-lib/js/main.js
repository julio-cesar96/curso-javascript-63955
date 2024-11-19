// Usando a lib Sweet Alert
const btnErro = document.getElementById('alertaErro');
const btnSucesso = document.getElementById('alertaSucesso');
const btnConfirma = document.getElementById('alertaConfirma');
btnErro.addEventListener('click', () => {
    swal({
        title: 'Erro!',
        text: 'Ocorreu um erro inesperado!',
        icon: 'error',
        button: 'Fechar',
    })
})

btnSucesso.addEventListener('click', () => {
    swal({
        title: 'Otimo',
        text: 'Você realizou a tarefa com sucesso!',
        icon: 'success',
        buttons: {
            cancel: true,
            confirm: "Ok",
        },
    });
})

btnConfirma.addEventListener('click', async () => {
    try {
        const resultado = await swal({
            title: 'Tem certeza que deseja excluir os dados?',
            icon: 'warning',
            buttons: {
                cancel: "Não",
                confirm: "Sim",
            },
        });

        if (resultado) {
            await swal({
                title: 'Excluído',
                icon: 'success',
                text: 'Dados excluidos com sucesso'
            });
        }
    } catch (error) {
        console.error("Ocorreu um errro: ", error);
    }
})


// Usando a lib Toastyfy

const btnNotificacao = document.getElementById('notificacao');
btnNotificacao.addEventListener('click', () => {
    Toastify({
        text: 'Teste de notificação',
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'linear-gradient(to right, #00bb9b, #96c92d)'
        }
    }).showToast();
});

// Trabalhando com a Lib Luxon para datas
const DateTime = luxon.DateTime;
const Duracao = luxon.Duration;

const dt = DateTime.from("2025-05-25");
const dur = Duration.fromObject({
    hours: 3,
    minutes: 15
});

console.log(dur.hours);