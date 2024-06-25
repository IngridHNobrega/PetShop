document.addEventListener("DOMContentLoaded", function() {
    // Inicialização do Slick Carousel na seção de boas-vindas
    $('.welcome-section .carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Funcionalidade da página de acolhimento
    const learnMoreButton = document.getElementById("learn-more");
    if (learnMoreButton) {
        learnMoreButton.addEventListener("click", function() {
            alert("Mais informações sobre a promoção incrível!");
        });
    }

    // Funcionalidade da página de produtos
    const cartIcon = document.querySelector(".cart-icon");
    let cartCount = 0;
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            cartCount++;
            cartIcon.textContent = `🛒 (${cartCount})`;
        });
    });

    // Funcionalidade da página de cadastro
    const registrationForm = document.getElementById("registration-form");
    if (registrationForm) {
        registrationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (name && email && password) {
                alert("Cadastro realizado com sucesso!");
                registrationForm.reset();
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }

    // Funcionalidade para agendar serviço na página de serviços
    const scheduleButton = document.getElementById("schedule");
    if (scheduleButton) {
        scheduleButton.addEventListener("click", function() {
            const selectedService = document.querySelector('input[name="service"]:checked');
            if (selectedService) {
                const serviceName = selectedService.value;
                const confirmationMessage = `Agendamento realizado para o serviço de ${serviceName}.`;
                alert(confirmationMessage);
            } else {
                alert("Por favor, selecione um serviço antes de agendar.");
            }
        });
    }
});

