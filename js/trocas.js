document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".troca-form");
    const inputProduto = document.getElementById("produto");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede o recarregamento da página

        const produto = inputProduto.value.trim();

        if (produto === "") {
            alert("Por favor, digite o nome do produto.");
            return;
        }

        // Simulação de envio
        alert(`Solicitação de troca para "${produto}" enviada com sucesso!`);

        // Limpa o campo
        inputProduto.value = "";
    });
});