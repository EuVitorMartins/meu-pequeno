/* =====================================
   MEU PEQUENO LEITOR
   JAVASCRIPT PRINCIPAL
===================================== */



document.addEventListener("DOMContentLoaded", function(){





/* =====================================
   DATA AUTOMÁTICA DA OFERTA
===================================== */


const dateElement = document.getElementById("current-date");


if(dateElement){


    const today = new Date();


    const day = String(today.getDate()).padStart(2,"0");

    const month = String(today.getMonth()+1).padStart(2,"0");



    dateElement.textContent = `${day}/${month}`;


}








/* =====================================
   FAQ ABRIR E FECHAR
===================================== */


const faqButtons = document.querySelectorAll(".faq-question");



faqButtons.forEach(button => {


    button.addEventListener("click", function(){


        const answer = this.nextElementSibling;


        const icon = this.querySelector("span");



        // fecha outros FAQs


        document.querySelectorAll(".faq-answer").forEach(item => {


            if(item !== answer){

                item.style.display = "none";

            }


        });



        document.querySelectorAll(".faq-question span").forEach(item=>{


            item.textContent="+";


        });






        if(answer.style.display === "block"){


            answer.style.display="none";


            if(icon){

                icon.textContent="+";

            }


        }else{


            answer.style.display="block";


            if(icon){

                icon.textContent="-";

            }


        }



    });



});









/* =====================================
   ANIMAÇÃO AO ROLAR A PÁGINA
===================================== */


const animatedElements = document.querySelectorAll(

".bonus-card, .learning-card, .daily-card, .testimonial-card, .security-card, .offer-item"

);



animatedElements.forEach(element=>{


    element.classList.add("hidden");


});






const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


        observer.unobserve(entry.target);


    }



});


},{

    threshold:0.15

});





animatedElements.forEach(element=>{


    observer.observe(element);


});








/* =====================================
   ROLAGEM SUAVE DOS BOTÕES
===================================== */


const links = document.querySelectorAll('a[href^="#"]');



links.forEach(link=>{


link.addEventListener("click",function(e){


const target = document.querySelector(

this.getAttribute("href")

);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});









/* =====================================
   CARROSSEL AUTOMÁTICO DE ATIVIDADES
===================================== */


const track = document.querySelector(".activity-track");



if(track){



let position = 0;


function moveCarousel(){


position -= 1;


track.style.transform =

`translateX(${position}px)`;



const width = track.scrollWidth / 2;



if(Math.abs(position) >= width){


position = 0;


}



}



setInterval(moveCarousel,20);



}









/* =====================================
   EFEITO NOS BOTÕES CTA
===================================== */


const buttons = document.querySelectorAll(".hero-button");



buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


button.style.transform="scale(1.05)";


});



button.addEventListener("mouseleave",()=>{


button.style.transform="scale(1)";


});



});






});

/* =====================================
   POPUP NOTIFICAÇÃO KIT GRAFISMO
===================================== */


const purchasePopup = document.getElementById(
    "purchasePopup"
);


const buyerName = document.getElementById(
    "buyerName"
);





const buyers = [

    "Ana acabou de garantir",

    "Mariana acabou de garantir",

    "Juliana acabou de garantir",

    "Camila acabou de garantir",

    "Fernanda acabou de garantir",

    "Patrícia acabou de garantir",

    "Beatriz acabou de garantir",

    "Carolina acabou de garantir",

    "Larissa acabou de garantir",

    "Amanda acabou de garantir",

    "Renata acabou de garantir",

    "Aline acabou de garantir",

    "Vanessa acabou de garantir",

    "Priscila acabou de garantir",

    "Gabriela acabou de garantir",

    "Isabela acabou de garantir",

    "Letícia acabou de garantir",

    "Raquel acabou de garantir",

    "Daniela acabou de garantir",

    "Tatiane acabou de garantir"

];





const avatars = [

    "👩",

    "👩‍🦰",

    "👩🏻",

    "👩🏽",

    "👩🏼"

];





let lastBuyer = "";







function showPurchasePopup(){


    if(!purchasePopup) return;



    let randomBuyer;



    do {


        randomBuyer = buyers[

            Math.floor(
                Math.random() * buyers.length
            )

        ];


    } while(randomBuyer === lastBuyer);



    lastBuyer = randomBuyer;





    const randomAvatar = avatars[

        Math.floor(
            Math.random() * avatars.length
        )

    ];





    document.querySelector(
        ".purchase-avatar"
    ).textContent = randomAvatar;





    buyerName.textContent = randomBuyer;





    purchasePopup.classList.add(
        "show"
    );






    setTimeout(()=>{


        purchasePopup.classList.remove(
            "show"
        );


    },6000);



}









// PRIMEIRA EXIBIÇÃO
// após 45 segundos


setTimeout(()=>{


    showPurchasePopup();



    startPopupRotation();


},45000);








// ALTERNA 15s E 30s


function startPopupRotation(){



    let delay = 15000;



    setInterval(()=>{


        showPurchasePopup();



        // alterna tempo


        delay = delay === 15000
        ? 30000
        : 15000;



    },delay);



}