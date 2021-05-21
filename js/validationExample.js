'use strict'

window.addEventListener("load", function(){
    console.log("DOM Cargado");

    var formulario = document.querySelector("#formulario");
    var boxDashed = document.querySelector(".dashed");
    boxDashed.style.display = "none";

    formulario.addEventListener("submit", function(){
        console.log("Evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("Rellena el campo nombre");
            return false;
        };

        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            alert("Rellena el campo apellidos");
            return false;
        };

        if (edad <= 0 || isNaN(edad)) {
            alert("Rellena el campo edad");
            return false;
        };

        boxDashed.style.display = "block";

        console.log("Tu nombre es: " + nombre);
        console.log("Tus apellidos son: " + apellidos);
        console.log("Tu edad es: " + edad);

        var pNombre = document.querySelector("#pNombre");
        var pApellidos = document.querySelector("#pApellidos");
        var pEdad = document.querySelector("#pEdad");

        pNombre.innerHTML = nombre;
        pApellidos.innerHTML = apellidos;
        pEdad.innerHTML = edad;

    });
})