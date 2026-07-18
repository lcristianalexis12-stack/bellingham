// ===== LOADER =====

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");


    setTimeout(()=>{

        loader.style.opacity="0";
        loader.style.transition="1s";


        setTimeout(()=>{

            loader.style.display="none";

        },1000);


    },1500);


});

// ===== NAVBAR CAMBIA AL HACER SCROLL =====

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.9)";
        header.style.transition = "0.4s";

    }else{

        header.style.background = "transparent";

    }

});



// ===== ANIMACIONES AL APARECER =====


const elementos = document.querySelectorAll(
    "section, .cards div, .stats div, .gallery img"
);


function mostrarElementos(){

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        const alturaPantalla = window.innerHeight;


        if(posicion < alturaPantalla - 100){

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

}



elementos.forEach(elemento => {

    elemento.style.opacity="0";
    elemento.style.transform="translateY(50px)";
    elemento.style.transition="0.8s";

});


window.addEventListener("scroll", mostrarElementos);

mostrarElementos();



// ===== BOTON DEL HERO =====


const boton = document.querySelector("button");


boton.addEventListener("click",()=>{

    document.querySelector("#historia")
    .scrollIntoView({

        behavior:"smooth"

    });

});



// ===== CONTADORES DE ESTADISTICAS =====


const numeros = document.querySelectorAll(".stats h3");


let iniciado = false;


function contador(){

    const seccion =
    document.querySelector("#estadisticas");


    const posicion =
    seccion.getBoundingClientRect().top;


    if(posicion < window.innerHeight - 100 && !iniciado){

        numeros.forEach(numero=>{


            let objetivo =
            parseInt(numero.innerText);


            let actual=0;


            let intervalo =
            setInterval(()=>{


                actual+=1;


                numero.innerText =
                actual+"+";


                if(actual>=objetivo){

                    clearInterval(intervalo);

                }


            },30);


        });


        iniciado=true;

    }

}



window.addEventListener("scroll",contador);

// ===== GALERIA MODAL =====


function abrirImagen(src){

    const modal = document.getElementById("modal");

    const imagen = document.getElementById("imagenModal");


    modal.style.display="flex";

    imagen.src=src;


}



function cerrarImagen(){

    document.getElementById("modal").style.display="none";

}

// ===== BOTON SUBIR =====


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }


});



topBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});

// ===== MENU MOVIL =====


const menuBtn = document.querySelector(".menu-btn");

const menu = document.querySelector("#menu");


menuBtn.addEventListener("click",()=>{


    menu.classList.toggle("active");


});

// ===== SLIDER MOMENTOS =====


const slides = document.querySelectorAll(".slide");

let actual = 0;


function cambiarSlide(){


    slides[actual].classList.remove("active");


    actual++;


    if(actual >= slides.length){

        actual=0;

    }


    slides[actual].classList.add("active");


}



setInterval(cambiarSlide,4000);

// ===== VOLVER AL INICIO =====


function volverInicio(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}