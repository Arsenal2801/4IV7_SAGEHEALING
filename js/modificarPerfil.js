'use strict'

const formulario = document.querySelector("#form");

formulario.addEventListener("submit", function(prevent){
    console.log("Envento submit capturado");

    const isNombre = /^[a-zA-Z0-9\_\-]{5,15}$/;
    const isNumero = /^\d{1,2}$/;
    const isCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isContraseña = /^[a-zA-Z0-9\_\-]{5,15}$/;

    let campoNombre = document.querySelector("#nombre");
    let campoEdadd = document.querySelector("#edadd");
    let campoAltura = document.querySelector("#altura");
    let campoPeso = document.querySelector("#peso");
    let campoCorreo = document.querySelector("#correo");
    let campoContraseña = document.querySelector("#contraseña");

    let nombre = document.querySelector("#nombre").value.trim();
    let edadd = document.querySelector("#edadd").value.trim();
    let altura = document.querySelector("#altura").value.trim();
    let peso = document.querySelector("#peso").value.trim();
    let correo = document.querySelector("#correo").value.trim();
    let contraseña = document.querySelector("#contraseña").value.trim();

    let warningNombre = document.querySelector("#warningNombre");
    let warningEdadd = document.querySelector("#warningEdadd");
    let warningAltura = document.querySelector("#warningAltura");
    let warningPeso = document.querySelector("#warningPeso");
    let warningCorreo = document.querySelector("#warningCorreo");
    let warningContraseña = document.querySelector("#warningContraseña");

    // validationNombre
    if (nombre.match(isNombre) && nombre.length <= 15 && nombre.length >= 5){
        warningNombre.innerHTML = "";
        campoNombre.style.background = "#DCF9F6"
        console.log("Input nombre listo");
    }else{
        campoNombre.style.background = "#F7C9F8";
        warningNombre.innerHTML = "Ingresa solo letras y numeros";
        if (nombre.length < 5 || nombre.length > 15){
            warningNombre.innerHTML = "Ingresa de 5 a 15 caracteres";
        };
        if (nombre.length == 0){
            warningNombre.innerHTML = "Rellena este campo";
        };
        prevent.preventDefault();
    };

    // validationEdad
    if (edadd.match(isNumero) && edadd <= 40 && edadd >= 20){
        warningEdadd.innerHTML = "";
        campoEdadd.style.background = "#DCF9F6"
        console.log("Input edad listo");
    }else{
        campoEdadd.style.background = "#F7C9F8";
        warningEdadd.innerHTML = "Ingresa un numero entre 20 y 40";
        if (edadd == 0){
            warningEdadd.innerHTML = "Rellena este campo";
        };
        if (edadd < 0){
            warningEdadd.innerHTML = "No es posible que tengas esa edad";
        };
        prevent.preventDefault();
    };

    // validationAltura
    if (altura >= 1 && altura <= 2.5){
        warningAltura.innerHTML = "";
        campoAltura.style.background = "#DCF9F6"
        console.log("Input altura listo");
    }else{
        campoAltura.style.background = "#F7C9F8";
        warningAltura.innerHTML = "Ingrese un numero entre 1 y 2.5";
        if (altura == 0){
            warningAltura.innerHTML = "Rellena este campo";
        };
        if (altura < 0){
            warningAltura.innerHTML = "No es posible que tengas esa altura";
        };
        prevent.preventDefault();
    };

    // validationPeso
    if (peso >= 40 && peso <= 100){
        warningPeso.innerHTML = "";
        campoPeso.style.background = "#DCF9F6"
        console.log("Input peso listo");
    }else{
        campoPeso.style.background = "#F7C9F8";
        warningPeso.innerHTML = "Ingrese un numero entre 40 y 100";
        if (peso == 0){
            warningPeso.innerHTML = "Rellena este campo";
        };
        if (peso < 0){
            warningPeso.innerHTML = "No es posible que tengas ese peso";
        };
        prevent.preventDefault();
    };

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

    // validationCorreo
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