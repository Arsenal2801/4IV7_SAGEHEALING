// JS crear cuenta

function validar(){

    // Validacion de nombre
    primero();

    // Validación de edad
    segundo();

    // Validacion del correo1
    tercero();

    // Validacion de la contraseña
    cuarto();

}

// Variables para la validación
var letras = /^[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/;
var num = /^[0-9]+$/;


// Validación del campo Nombre
function primero(){
    // No se ingresan caracteres de más en nombre o edad (´･(∞)･｀)
    if(document.getElementById('nombre').value.length >= 4 && document.getElementById('nombre').value.length <= 15){
        document.getElementById('cont').style.backgroundColor = "#fff";

        if(document.getElementById('nombre').value.match(letras)){
            console.log('el campo nombre está bien');
            document.getElementById('cont').style.backgroundColor = "#fff";

        }else{
            console.log('hay un problema en el campo nombre');
            alert('Por favor, ingrese letras sin acento en el campo nombre')
            document.getElementById('nombre').focus();
            document.getElementById('nombre').style.backgroundColor = "#ef83cb50";
            event.preventDefault();
        }
    }else{
        console.log('la longitud del campo nombre está mal', document.getElementById('nombre').value.length);
        alert('Por favor, ingrese entre cuatro y diez caracteres en el campo nombre');
        document.getElementById('nombre').focus();
        document.getElementById('nombre').style.backgroundColor = "#ef83cb50";
        event.preventDefault();
    }
}

// Validación del campo Edad
function segundo(){
    if(document.getElementById('edad').value.length == 2 ){
        console.log('la longitud de edad está bien')
        document.getElementById('cont').style.backgroundColor = "#fff";

        // validación de edad
        if(document.getElementById('edad').value.match(num) && document.getElementById('edad').value >= 20 
            && document.getElementById('edad').value <= 40){
                console.log('el campo edad está bien');
                document.getElementById('cont').style.backgroundColor = "#fff";

        }else{
            console.log('hay un problema en el campo edad');
            alert('Por favor, ingrese únicamente números en el campo edad');
            document.getElementById('edad').focus();
            document.getElementById('edad').style.backgroundColor = "#ef83cb50";
            event.preventDefault()
        }

    }else{
        console.log('la longitud del campo edad está mal');
        alert('Por favor, ingrese únicamente dos numeros en el campo edad');
        document.getElementById('edad').focus();
        document.getElementById('edad').style.backgroundColor = "#ef83cb50";
        event.preventDefault();
    }
}

// Validación del correo
function tercero(correo = document.getElementById('correo').value){
    if(document.getElementById('correo').value.length <= 35){
        console.log('la longitud del correo está bien')
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo)){
            console.log('el campo correo está bien');
            document.getElementById('cont').style.backgroundColor = "#fff";
        }else{
            console.log('hay un problema en el campo correo');
            alert('Por favor, complete correctamente el campo correo');
            document.getElementById('correo').focus();
            document.getElementById('correo').style.backgroundColor = "#ef83cb50";
            event.preventDefault();
        }
    }else{
        console.log('el largo del correo está mal');
        alert('Por favor, ingrese menos de 36 caracteres en el campo correo');
        document.getElementById('correo').focus();
        document.getElementById('correo').style.backgroundColor = "#ef83cb50";
        event.preventDefault();
    }
}

// validación contraseña ʕ； •`ᴥ•´ʔ
function cuarto(){
    if(document.getElementById('cont').value.length > 9 && document.getElementById('cont').value.length < 30){
        if(document.getElementById('cont').value.match(letras) && document.getElementById('cont').value.match(num)){
            console.log('el campo contraseña está bien');
            document.getElementById('cont').style.backgroundColor = "#fff";
        }else{
            console.log('el campo contraseña no tiene numeros y letras');
            alert('Por favor, ingrese letras sin acento y números en el campo contraseña');
            document.getElementById('cont').focus();
            document.getElementById('cont').style.backgroundColor = "#ef83cb50";
            event.preventDefault();
        }
    }else{
        console.log('el largo de la contraseña está mal');
        alert('Por favor, ingrese más de diez caracteres y menos de 30 en el campo contraseña');
        document.getElementById('cont').focus();
        document.getElementById('cont').style.backgroundColor = "#ef83cb50";
        event.preventDefault();
    }
}
