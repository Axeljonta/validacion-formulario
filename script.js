const submitFuction = (e) => {
    
    if(!validarFormulario()){
        e.preventDefault();
    }else{
        e.preventDefault();

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit',submitFuction) //escuchar envio de formulario

function validarFormulario() {
    
//Valida el texto

    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); // error mas el id con la primera letra en mayuscula
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido');
            validacionCorrecta = false;  
        }
        else if(campo.value.length > 0 && campo.value.length <3){
            mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres');
            validacionCorrecta = false;  
        }
        else{
            ocultarError(errorCampo)
        }
    })

    //Valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email.value) )? ocultarError(errorEmail): mostrarError(errorEmail, 'Ingrese un correo valido')
    
     // Validación de edad

     const edad = document.getElementById('edad');
     const errorEdad = document.getElementById('errorEdad')
 
     if (edad.value < 18) {
         mostrarError(errorEdad, '¡Debes ser mayor de 18 años para registrarte!')
         validacionCorrecta = false
     } else {
         ocultarError(errorEdad)
     }
 
 
     // Validación de la actividad
 
     const actividad = document.getElementById('actividad')
     const errorActividad = document.getElementById('errorActividad')
 
     if (actividad.value == '') {
         mostrarError(errorActividad, 'Por favor, selecciona una actividad')
         validacionCorrecta = false;
     } else {
         ocultarError(errorActividad)
     }
 
     // Validación de nivel de estudio
     const nivelEstudio = document.getElementById('nivelEstudio')
     const errorNivelEstudio = document.getElementById('errorNivelEstudio')
 
     if (nivelEstudio.value == '') {
         mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de estudio')
         validacionCorrecta = false;
         console.log('hola');
         
     } else {
         ocultarError(errorNivelEstudio)
     }
 
     // Validar los términos y condiciones
 
     const aceptoTerminos = document.getElementById('aceptoTerminos')
     const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')
 
     if (!aceptoTerminos.checked) {
         mostrarError(errorAceptoTerminos, '¡Debes aceptar los términos y condiciones!')
         validacionCorrecta = false
     } else {
         ocultarError(errorAceptoTerminos)
     }
 
     return validacionCorrecta // esto dirá si el formulario completo es o no válido
}

const mostrarError = (elemento , mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
    }

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = 'none';
    }



