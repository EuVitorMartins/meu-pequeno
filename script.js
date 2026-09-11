/* ==========================================
   MEU PEQUENO LEITOR
   JAVASCRIPT COMPLETO
========================================== */



/* ==========================================
   FAQ ACCORDION
========================================== */


const faqButtons = document.querySelectorAll(".faq-item button");


faqButtons.forEach((button)=>{


    button.addEventListener("click", ()=>{


        const resposta = button.nextElementSibling;


        // Fecha todas as respostas abertas

        document.querySelectorAll(".faq-item p")
        .forEach((item)=>{

            if(item !== resposta){

                item.style.display = "none";

            }

        });



        // Abre ou fecha atual

        if(resposta.style.display === "block"){

            resposta.style.display = "none";

        }else{

            resposta.style.display = "block";

        }



    });


});

// =================================
// POPUP UPGRADE PLANO BÁSICO
// =================================


const basicButton = document.querySelector(".basic-offer-btn");

let basicCheckout =
"https://checkout.meu-pequeno-leitor.shop/VCCL1O8SD8OG";


if(basicButton){


    basicButton.addEventListener("click",function(e){

        e.preventDefault();

        document
        .getElementById("upgradePopup")
        .classList.add("active");


    });


}



function continueBasic(){


    window.location.href = basicCheckout;


}



function closeUpgrade(){


    document
    .getElementById("upgradePopup")
    .classList.remove("active");


}




function playVSL(){

    const video = document.getElementById("vslVideo");

    const overlay = document.getElementById("playOverlay");


    overlay.style.display="none";

    video.play();

}

// =================================
// BOTÃO FIXO APÓS SEÇÃO DO KIT
// =================================


const mobileButton = document.getElementById("mobileBuyButton");

const kitSection = document.querySelector(".content-kit");


window.addEventListener("scroll",()=>{


    if(!kitSection || !mobileButton) return;


    const position = kitSection.getBoundingClientRect();



    if(position.bottom < 0){


        mobileButton.classList.add("active");


    }else{


        mobileButton.classList.remove("active");


    }


});



/* ==========================================
   SCROLL SUAVE NOS BOTÕES
========================================== */


const links = document.querySelectorAll('a[href^="#"]');


links.forEach((link)=>{


    link.addEventListener("click",(e)=>{


        const destino = document.querySelector(
            link.getAttribute("href")
        );


        if(destino){


            e.preventDefault();


            destino.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});









/* ==========================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================== */


const elementosAnimados = document.querySelectorAll(

".how-card, .kit-card, .bonus-card, .audience-grid div, .testimonial-grid img, .plan"

);



elementosAnimados.forEach((elemento)=>{


    elemento.style.opacity="0";

    elemento.style.transform="translateY(40px)";

    elemento.style.transition="all .7s ease";


});





const observer = new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.style.opacity="1";

            entrada.target.style.transform="translateY(0)";


        }


    });


},{

    threshold:0.15

});





elementosAnimados.forEach((elemento)=>{


    observer.observe(elemento);


});


// ================================
// DATA DINÂMICA DA OFERTA
// ================================


function mostrarDataOferta(){

    const barra = document.querySelector(".top-offer");

    if(!barra) return;


    const dataOferta = document.createElement("div");

    dataOferta.className = "contador";


    const hoje = new Date();


    const dia = hoje.getDate();


    const meses = [

        "JANEIRO",
        "FEVEREIRO",
        "MARÇO",
        "ABRIL",
        "MAIO",
        "JUNHO",
        "JULHO",
        "AGOSTO",
        "SETEMBRO",
        "OUTUBRO",
        "NOVEMBRO",
        "DEZEMBRO"

    ];


    const mes = meses[hoje.getMonth()];


    dataOferta.innerHTML = 
    `📅 ACABA HOJE, DIA ${dia} DE ${mes} `;


    barra.appendChild(dataOferta);

}


mostrarDataOferta();



/* ==========================================
   EFEITO NOS BOTÕES
========================================== */


const botoes = document.querySelectorAll(
".main-button, .plan button"
);



botoes.forEach((botao)=>{


    botao.addEventListener("mouseenter",()=>{


        botao.style.transform="scale(1.05)";


    });



    botao.addEventListener("mouseleave",()=>{


        botao.style.transform="scale(1)";


    });



});









/* ==========================================
   SCROLL PARA OFERTA
========================================== */


const botoesCompra = document.querySelectorAll(
".main-button"
);



botoesCompra.forEach((botao)=>{


    botao.addEventListener("click",()=>{


        console.log(
        "Clique no botão de compra - Meu Pequeno Leitor"
        );


    });


});









/* ==========================================
   DETECÇÃO DE ROLAGEM
   PARA FUTUROS PIXELS
========================================== */


window.addEventListener("scroll",()=>{


    const scroll = window.scrollY;



    if(scroll > 500){


        document.body.classList.add("scrolled");


    }else{


        document.body.classList.remove("scrolled");


    }



});

// ================================
// POPUP SOCIAL PROOF
// ================================


const buyers = [

{
name:"Tatiane B.",
location:"Porto Alegre - RS"
},

{
name:"Juliana M.",
location:"São Paulo - SP"
},

{
name:"Carla R.",
location:"Curitiba - PR"
},

{
name:"Fernanda S.",
location:"Belo Horizonte - MG"
},

{
name:"Mariana L.",
location:"Rio de Janeiro - RJ"
},

{
name:"Ana Paula R.",
location:"Campinas - SP"
},

{
name:"Patrícia M.",
location:"Florianópolis - SC"
},

{
name:"Camila A.",
location:"Salvador - BA"
},

{
name:"Renata C.",
location:"Brasília - DF"
},

{
name:"Aline F.",
location:"Recife - PE"
},

{
name:"Larissa G.",
location:"Goiânia - GO"
},

{
name:"Beatriz S.",
location:"Fortaleza - CE"
},

{
name:"Vanessa P.",
location:"Joinville - SC"
},

{
name:"Amanda T.",
location:"Londrina - PR"
},

{
name:"Carolina M.",
location:"Santos - SP"
},

{
name:"Daniela R.",
location:"São José dos Campos - SP"
},

{
name:"Priscila V.",
location:"Maringá - PR"
},

{
name:"Letícia A.",
location:"Vitória - ES"
},

{
name:"Simone B.",
location:"Manaus - AM"
},

{
name:"Cristiane L.",
location:"Campo Grande - MS"
},

{
name:"Raquel F.",
location:"Niterói - RJ"
},

{
name:"Mônica S.",
location:"Ribeirão Preto - SP"
},

{
name:"Elaine P.",
location:"Blumenau - SC"
},

{
name:"Gabriela N.",
location:"Cuiabá - MT"
},

{
name:"Kelly A.",
location:"Uberlândia - MG"
}

];



function showPurchasePopup(){


const popup=document.getElementById("purchasePopup");

if(!popup) return;


const random =
buyers[Math.floor(Math.random()*buyers.length)];



document.getElementById("buyerName")
.innerHTML=random.name;


document.getElementById("buyerLocation")
.innerHTML=
"há poucos minutos • "+random.location;



popup.classList.add("active");



setTimeout(()=>{


popup.classList.remove("active");


},5000);



}



function closePopup(){

document
.getElementById("purchasePopup")
.classList.remove("active");

}




setTimeout(()=>{


showPurchasePopup();


setInterval(()=>{


showPurchasePopup();


},15000);



},8000);

const track = document.querySelector(".carousel-track");

let position = 0;


setInterval(()=>{


const items =
document.querySelectorAll(".depoimento-img");


position++;


if(position >= items.length){

position = 0;

}



track.style.transform =
`translateX(-${position * 320}px)`;


},4000);

  /*/ ALTERE O LINK PARA A PÁGINA QUE QUISER MOSTRAR QUANDO O USUÁRIO TENTAR SAIR
  const link = 'https://meubackredirect.com.br';

  function setBackRedirect(url) {
    let urlBackRedirect = url;
    urlBackRedirect = urlBackRedirect =
      urlBackRedirect.trim() +
      (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
      document.location.search.replace('?', '').toString();

    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);

    window.addEventListener('popstate', () => {
      console.log('onpopstate', urlBackRedirect);
      setTimeout(() => {
        location.href = urlBackRedirect;
      }, 1);
    });
  }

  setBackRedirect(link);*/
