function validarContrasena() {
    const contrasena = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");
    const resultado = document.getElementById("resultado");

    // Criterios de una contraseña segura
    const longitudMinima = 12;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);
    const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);
    const contraseñasComunes = ["123456", "password", "qwerty", "abc123"];

    // Verificar que la contraseña cumple con los criterios
    let mensajeResultado = "";
    let claseResultado = "";

    if (contrasena.length < longitudMinima) {
        mensajeResultado = "La contraseña debe tener al menos 12 caracteres.";
        claseResultado = "débil";
    } else if (contrasena.length >= longitudMinima &&
               tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial &&
               !contraseñasComunes.includes(contrasena)) {
        mensajeResultado = "La contraseña es segura.";
        claseResultado = "fuerte";
    } else {
        mensajeResultado = "La contraseña es débil. Intenta incluir más caracteres y variedad.";
        claseResultado = "media";
    }

    // Mostrar el mensaje y el resultado
    mensaje.innerText = mensajeResultado;
    resultado.innerText = mensajeResultado;
    resultado.className = claseResultado;
}

