// JS crear cuenta

function validar(){
    vacio();
}

// Se completan todos los espacios
function vacio(){
    if(document.querySelector('#nombre').value.trim()=="" || document.querySelector('#correo').value.trim()=="" ||
        document.querySelector('#cont').value.trim()=="" || document.querySelector('#edad').value.trim()==""){
        console.log('hay espacios vacíos en crear cuenta');
        alert('Por favor, complete todos los espacios');
        event.preventDefault()
    }else{
            console.log('todos los espacios contienen caracteres');
            event.preventDefault();
        }
}

