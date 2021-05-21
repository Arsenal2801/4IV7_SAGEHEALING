'use strict'

const formulario = document.querySelector("#form");

formulario.addEventListener("submit", function(prevent){
    console.log("Envento submit capturado");

    const isCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isContraseña = /^[a-zA-Z0-9\_\-]{5,15}$/;

    let campoCorreo = document.querySelector("#correo");
    let campoContraseña = document.querySelector("#contraseña");

    let correo = document.querySelector("#correo").value.trim();
    let contraseña = document.querySelector("#contraseña").value.trim();

    let warningCorreo = document.querySelector("#warningCorreo");
    let warningContraseña = document.querySelector("#warningContraseña");

    // validationCorreo
    if (correo.match(isCorreo)){
        warningCorreo.innerHTML = "";
        campoCorreo.style.background = "#DCF9F6"
        console.log("Input correo listo");
    }else{
        campoCorreo.style.background = "#F7C9F8";
        warningCorreo.innerHTML = "Introduzca un correo valido";
        if (correo.length == 0){
            warningCorreo.innerHTML = "Rellena este campo";
        };
        prevent.preventDefault();
    };

    // validationContraseña
    if (contraseña.match(isContraseña)){
        warningContraseña.innerHTML = "";
        campoContraseña.style.background = "#DCF9F6"
        console.log("Input contraseña listo");

    }else{
        campoContraseña.style.background = "#F7C9F8";
        warningContraseña.innerHTML = "Ingresa solo letras, numeros";
        if (contraseña.length < 5 || contraseña.length > 15){
            warningContraseña.innerHTML = "Ingresa de 5 a 15 caracteres";
        };
        if (contraseña.length == 0){
            warningContraseña.innerHTML = "Rellena este campo";
        };
        prevent.preventDefault();
    };


});