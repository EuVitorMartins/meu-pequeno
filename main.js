document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.querySelector(
    '[data-testid="section-carousel"] .flex.gap-4'
    );

    const dots = document.querySelectorAll(
    '[data-testid^="carousel-dot"]'
    );

    const cards = carousel.children;

    let current = 0;
    let interval;

    function updateCarousel(index) {

        const cardWidth = cards[0].offsetWidth;
    const gap = 16;

    const move = index * (cardWidth + gap);

    carousel.style.transform = `translateX(-${move}px)`;

        dots.forEach((dot, i) => {
            if (i === index) {
        dot.classList.remove("bg-gray-300");
    dot.classList.add("bg-[#8B6914]");
            } else {
        dot.classList.remove("bg-[#8B6914]");
    dot.classList.add("bg-gray-300");
            }
        });

    current = index;
    }


    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            updateCarousel(index);

            resetAuto();

        });

    });


    function nextSlide(){

        current++;

        if(current >= dots.length){
        current = 0;
        }

    updateCarousel(current);

    }


    function startAuto(){

        interval = setInterval(() => {

            nextSlide();

        }, 4000);

    }


    function resetAuto(){

        clearInterval(interval);

    startAuto();

    }


    // inicia
    updateCarousel(0);

    startAuto();



    // =========================
    // Arrastar no celular
    // =========================

    let startX = 0;
    let endX = 0;


    carousel.addEventListener("touchstart", e=>{

        startX = e.touches[0].clientX;

    });


    carousel.addEventListener("touchend", e=>{

        endX = e.changedTouches[0].clientX;


        if(startX - endX > 50){

        current++;

            if(current >= dots.length)
    current = 0;

    updateCarousel(current);

        }


        if(endX - startX > 50){

        current--;

    if(current < 0)
    current = dots.length -1;

    updateCarousel(current);

        }


    resetAuto();

    });


});

document.addEventListener("DOMContentLoaded", function () {
    const faqs = [
        "O Kit Grafismo Fonético é indicado principalmente para crianças de 2 a 12 anos, respeitando sempre o nível de desenvolvimento e o ritmo de cada criança.",
        
        "O material pode ser utilizado como apoio por crianças com diferentes perfis de atenção e aprendizagem. No caso de TDAH, Autismo ou outras necessidades específicas, recomendamos adaptar as atividades às necessidades da criança e, quando necessário, contar com orientação profissional.",
        
        "Após a confirmação da compra, você recebe no e-mail o acesso à plataforma com os materiais em PDF para acessar e imprimir.",
        
        "Sim. O acesso é vitalício e você pode imprimir as atividades quantas vezes quiser para uso pessoal com seu filho ou aluno.",
        
        "Cada criança aprende em um ritmo diferente. Com a prática frequente, você poderá acompanhar pequenas conquistas desde as primeiras atividades. A proposta é criar uma rotina leve e consistente, sem pressão.",
        
        "Você conta com uma garantia incondicional de 7 dias. Se o material não fizer sentido para você, basta solicitar o reembolso dentro desse prazo, conforme as condições da oferta."
    ];

    const buttons = document.querySelectorAll('[data-testid^="faq-question-"]');

    buttons.forEach(function (button, index) {
        // Evita duplicar respostas se o script for carregado novamente
        if (button.parentElement.querySelector(".faq-answer")) return;

        const answer = document.createElement("div");

        answer.className = "faq-answer hidden px-4 pb-4 text-gray-600 leading-relaxed";
        answer.innerHTML = faqs[index] || "";

        button.parentElement.appendChild(answer);

        button.setAttribute("type", "button");
        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", function () {
            const isOpen = !answer.classList.contains("hidden");

            // Fecha todos os outros
            buttons.forEach(function (otherButton) {
                const otherContainer = otherButton.parentElement;
                const otherAnswer = otherContainer.querySelector(".faq-answer");
                const otherIcon = otherButton.querySelector("svg");

                if (otherAnswer) {
                    otherAnswer.classList.add("hidden");
                }

                otherButton.setAttribute("aria-expanded", "false");

                if (otherIcon) {
                    otherIcon.style.transform = "rotate(0deg)";
                }
            });

            // Abre o clicado
            if (!isOpen) {
                answer.classList.remove("hidden");
                button.setAttribute("aria-expanded", "true");

                const icon = button.querySelector("svg");

                if (icon) {
                    icon.style.transform = "rotate(180deg)";
                    icon.style.transition = "transform 0.2s ease";
                }
            }
        });
    });
});
