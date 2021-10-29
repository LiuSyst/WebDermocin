let slider = document.querySelector('.alumnos_contento');
let sliderInd = document.querySelectorAll('.slider_contento');
let contador = 1;
let tamanoWidth = sliderInd[0].clientWidth;
let intervalo = 5000;
let flota = document.querySelector('.btn_msj');
let whatsapp = document.querySelector('.btn_wha');
let facebook = document.querySelector('.btn_fb');
let vida = document.querySelector('.btn_vida');
let flotando = document.querySelector('.flotando');

window.addEventListener("resize", function(){
    tamanoWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo(){
     slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate('+(- tamanoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++

    if(contador == sliderInd.length){
        contador = 0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s';
        }, intervalo)
    }
}

flotando.addEventListener("mouseover", ver_flotando);
flotando.addEventListener("mouseout", ocultar_flotando);

function ver_flotando(){
    whatsapp.classList.add('animacionVer');
    facebook.classList.add('animacionVer');
    vida.classList.add('animacionVer');
}
function ocultar_flotando(){
    whatsapp.classList.remove("animacionVer");
    facebook.classList.remove("animacionVer");
    vida.classList.remove("animacionVer");
}