let nombreUsuario = document.getElementById("nombre");
let contraseñaUsuario = document.getElementById("contraseña");
let cedulaUsuario = document.getElementById("cedula");
let correoUsuario = document.getElementById("correo");
let sexoMUsuario = document.getElementById("sexoMUsuario");
let sexoFUsuario = document.getElementById("sexoFUsuario");
let boton1 = document.getElementById("boton1");

boton1.addEventListener("click", validarFormulario);

function validarFormulario(evento) {

    evento.preventDefault();

    console.log("hola");
    console.log(nombreUsuario.value);


    if(nombreUsuario.value == "" && contraseñaUsuario.value == "" && cedulaUsuario.value == "" && correoUsuario.value == ""){

        nombreUsuario.classList.add("is-invalid");
        contraseñaUsuario.classList.add("is-invalid");
        cedulaUsuario.classList.add("is-invalid");
        correoUsuario.classList.add("is-invalid");  

    }else if(nombreUsuario.value != "" && contraseñaUsuario.value == "" && cedulaUsuario.value == "" && correoUsuario.value == ""){

        nombreUsuario.classList.remove("is-invalid");
        contraseñaUsuario.classList.add("is-invalid");
        cedulaUsuario.classList.add("is-invalid");
        correoUsuario.classList.add("is-invalid");

    }else if(nombreUsuario.value != "" && contraseñaUsuario.value != "" && cedulaUsuario.value == "" && correoUsuario.value == ""){

        nombreUsuario.classList.remove("is-invalid");
        contraseñaUsuario.classList.remove("is-invalid");
        cedulaUsuario.classList.add("is-invalid");
        correoUsuario.classList.add("is-invalid");

    }else if(nombreUsuario.value != "" && contraseñaUsuario.value != "" && cedulaUsuario.value != "" && correoUsuario.value == ""){

        nombreUsuario.classList.remove("is-invalid");
        contraseñaUsuario.classList.remove("is-invalid");
        cedulaUsuario.classList.remove("is-invalid");
        correoUsuario.classList.add("is-invalid");  

    }else if(nombreUsuario.value == "" && contraseñaUsuario.value != "" && cedulaUsuario.value != "" && correoUsuario.value == ""){

        nombreUsuario.classList.add("is-invalid");
        contraseñaUsuario.classList.remove("is-invalid");
        cedulaUsuario.classList.remove("is-invalid");
        correoUsuario.classList.add("is-invalid");  

    }else if(nombreUsuario.value == "" && contraseñaUsuario.value != "" && cedulaUsuario.value != "" && correoUsuario.value != ""){

        nombreUsuario.classList.add("is-invalid");
        contraseñaUsuario.classList.remove("is-invalid");
        cedulaUsuario.classList.remove("is-invalid");
        correoUsuario.classList.remove("is-invalid");

    }else if(nombreUsuario.value == "" && contraseñaUsuario.value == "" && cedulaUsuario.value != "" && correoUsuario.value != ""){

        nombreUsuario.classList.add("is-invalid");
        contraseñaUsuario.classList.add("is-invalid");
        cedulaUsuario.classList.remove("is-invalid");
        correoUsuario.classList.remove("is-invalid");

    }else if(nombreUsuario.value == "" && contraseñaUsuario.value != "" && cedulaUsuario.value == "" && correoUsuario.value == ""){

        nombreUsuario.classList.add("is-invalid");
        contraseñaUsuario.classList.remove("is-invalid");
        cedulaUsuario.classList.add("is-invalid");
        correoUsuario.classList.add("is-invalid");

    }else if(nombreUsuario.value == "" && contraseñaUsuario.value == "" && cedulaUsuario.value != "" && correoUsuario.value == ""){

        nombreUsuario.classList.add("is-invalid");
        contraseñaUsuario.classList.add("is-invalid");
        cedulaUsuario.classList.remove("is-invalid");
        correoUsuario.classList.add("is-invalid");

    }else if(nombreUsuario.value == "" && contraseñaUsuario.value == "" && cedulaUsuario.value == "" && correoUsuario.value != ""){

        nombreUsuario.classList.add("is-invalid");
        contraseñaUsuario.classList.add("is-invalid");
        cedulaUsuario.classList.add("is-invalid");
        correoUsuario.classList.remove("is-invalid");

    }else if(nombreUsuario.value != "" && contraseñaUsuario.value == "" && cedulaUsuario.value != "" && correoUsuario.value == ""){

        nombreUsuario.classList.remove("is-invalid");
        contraseñaUsuario.classList.add("is-invalid");
        cedulaUsuario.classList.remove("is-invalid");
        correoUsuario.classList.add("is-invalid");

    }else if(nombreUsuario.value != "" && contraseñaUsuario.value == "" && cedulaUsuario.value == "" && correoUsuario.value != ""){

        nombreUsuario.classList.remove("is-invalid");
        contraseñaUsuario.classList.add("is-invalid");
        cedulaUsuario.classList.add("is-invalid");
        correoUsuario.classList.remove("is-invalid");

    }else if(nombreUsuario.value == "" && contraseñaUsuario.value != "" && cedulaUsuario.value == "" && correoUsuario.value != ""){

        nombreUsuario.classList.add("is-invalid");
        contraseñaUsuario.classList.remove("is-invalid");
        cedulaUsuario.classList.add("is-invalid");
        correoUsuario.classList.remove("is-invalid");

    }else if(nombreUsuario.value != "" && contraseñaUsuario.value != "" && cedulaUsuario.value == "" && correoUsuario.value != ""){

        nombreUsuario.classList.remove("is-invalid");
        contraseñaUsuario.classList.remove("is-invalid");
        cedulaUsuario.classList.add("is-invalid");
        correoUsuario.classList.remove("is-invalid");

    }else if(nombreUsuario.value != "" && contraseñaUsuario.value == "" && cedulaUsuario.value != "" && correoUsuario.value != ""){

        nombreUsuario.classList.remove("is-invalid");
        contraseñaUsuario.classList.add("is-invalid");
        cedulaUsuario.classList.remove("is-invalid");
        correoUsuario.classList.remove("is-invalid");

    }
    else{
        nombreUsuario.classList.remove("is-invalid");
        contraseñaUsuario.classList.remove("is-invalid");
        cedulaUsuario.classList.remove("is-invalid");
        correoUsuario.classList.remove("is-invalid");
    }
}