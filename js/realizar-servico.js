document.addEventListener('DOMContentLoaded', () => {
    let botaoSolicitarServico = document.getElementById('botao-solicitar-servico');
    let nomeServico = document.querySelector('.descricao-servico h2').innerText;

    botaoSolicitarServico.addEventListener('click', () => {
        botaoSolicitarServico.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processando...';
        botaoSolicitarServico.classList.add('loading');
        setTimeout(() => {
            mostrarNotificacao(`Solicitação de serviço para "${nomeServico}" enviada com sucesso!`);
            botaoSolicitarServico.innerHTML = 'Serviço solicitado';
            botaoSolicitarServico.style.backgroundColor = 'var(--botao-servico-active-color)';
        }, 1500);
    });
});

function mostrarNotificacao(mensagem) {
        let notificacao = document.querySelector(".notificacao");
        if (!notificacao) {
            notificacao = document.createElement("div");
            notificacao.classList.add("notificacao");
            document.body.appendChild(notificacao);
        }

        notificacao.innerText = mensagem;
        notificacao.style.display = "block";

        setTimeout(() => {
            notificacao.style.display = "none";
        }, 4000);
    }

const fotoUsuario = document.querySelector('.foto-usuario');
    fotoUsuario.addEventListener('mouseenter', () => {
        fotoUsuario.style.transform = 'scale(1.1) rotate(5deg)';
        fotoUsuario.style.transition = '0.3s';
    });
    
    fotoUsuario.addEventListener('mouseleave', () => {
        fotoUsuario.style.transform = 'scale(1) rotate(0deg)';
    });