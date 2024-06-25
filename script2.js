document.addEventListener("DOMContentLoaded", function() {

    // Funcionalidade para lidar com o envio do formulário de agendamento
    function handleFormSubmit(event) {
        event.preventDefault();

        // Obter os valores do formulário
        const serviceName = document.querySelector('input[name="service"]:checked');
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const teleBusca = document.getElementById("tele-busca").checked;

        // Verificar se um serviço foi selecionado
        if (!serviceName) {
            alert("Por favor, selecione um serviço antes de agendar.");
            return false;
        }

        // Exibir mensagem de confirmação
        const confirmationMessage = `Agendamento realizado para o serviço de ${serviceName.value}.\nData: ${date}\nHorário: ${time}\nTele-busca: ${teleBusca ? "Sim" : "Não"}`;
        alert(confirmationMessage);

        // Exibir mensagem de confirmação na página (opcional)
        const confirmationDiv = document.getElementById("confirmation-message");
        confirmationDiv.style.display = "block";

        // Limpar campos do formulário (opcional)
        document.getElementById("appointment-form").reset();

        return true;
    }

    // Vincular o evento de submit do formulário à função handleFormSubmit
    const appointmentForm = document.getElementById("appointment-form");
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", handleFormSubmit);
    }
});
