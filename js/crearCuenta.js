// JS crear cuenta

function validar(){
    vacio();
    primero();
    correo();
    pass();
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
            alert('Por favor, ingrese únicamente números en el campo edad');
            document.getElementById('edad').focus();
            event.preventDefault()
        }
    }else{
        console.log('hay un problema en el campo nombre');
        alert('Por favor, ingrese letras sin acento en el campo nombre')
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

// validación contraseña ʕ； •`ᴥ•´ʔ
function pass(){
    if(document.getElementById('cont').value.length > 9 && document.getElementById('cont').value.length < 30){
        if(document.getElementById('cont').value.match(letras) && document.getElementById('cont').value.match(num)){
            console.log('el campo contraseña está bien');
        }else{
            console.log('el campo contraseña no tiene numeros y letras');
            alert('Por favor, ingrese letras sin acento y números en el campo contraseña');
            document.getElementById('cont').focus();
            event.preventDefault();
        }
    }else{
        console.log('hay un problema en el campo contraseña');
        alert('Por favor, ingrese más de diez caracteres y menos de 30 en el campo contraseña');
        document.getElementById('correo').focus();
        event.preventDefault();
    }
}