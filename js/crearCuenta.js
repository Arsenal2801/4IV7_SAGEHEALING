// JS crear cuenta

function validar(){
    // vacio();
    // primero();
    correo();
}

// Variables para la validación
var letras = /^[A-Za-zÑñ]+$/;
var num = /^[0-9]+$/;

// Se completan todos los espacios
function vacio(){
    if(document.querySelector('#nombre').value.trim()=="" || document.querySelector('#correo').value.trim()=="" ||
        document.querySelector('#cont').value.trim()=="" || document.querySelector('#edad').value.trim()==""){
        console.log('hay espacios vacíos en crear cuenta');
        alert('Por favor, complete todos los espacios');
        event.preventDefault()
    }else{
        console.log('todos los espacios contienen caracteres');
        event.preventDefault()
        }
}

// Validación de los campos Nombre y Edad
function primero(){

    // validación de nombre
    if(document.getElementById('nombre').value.match(letras)){
        console.log('el campo nombre está bien');

        // validación de edad
        if(document.getElementById('edad').value.match(num) && document.getElementById('edad').value >= 20 
            && document.getElementById('edad').value <= 40){
                console.log('el campo edad está bien');

        }else{
            console.log('hay un problema en el campo edad');
            alert('Por favor, complete correctamente el campo edad');
            document.getElementById('edad').focus();
            event.preventDefault()
        }
    }else{
        console.log('hay un problema en el campo nombre');
        alert('Por favor, complete correctamente el campo nombre')
        document.getElementById('nombre').focus();
        event.preventDefault();
    }
}

// validación del campo correo
function correo(correo = document.getElementById('correo').value){
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo)){
        console.log('el campo correo está bien');
    }else{
        console.log('hay un problema en el campo correo');
        alert('Por favor, complete correctamente el campo correo');
        document.getElementById('correo').focus();
        event.preventDefault();
    }
}

